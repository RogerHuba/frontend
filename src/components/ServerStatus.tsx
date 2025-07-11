"use client";

import { useState, useEffect, useCallback } from "react";
import { Check, AlertTriangle, X, Clock, RefreshCw } from "lucide-react";
import { ServerStatusData } from "@/types/serverStatus";
import serverStatusData from "@/data/serverStatus.json";

type ServerState = "online" | "offline" | "maintenance" | "high-traffic" | "loading";

interface ServerStatusProps {
  className?: string;
  showRefresh?: boolean;
}

export function ServerStatus({ className = "", showRefresh = false }: ServerStatusProps) {
  const [status, setStatus] = useState<ServerState>("loading");
  const [playerCount, setPlayerCount] = useState<number>(0);
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [maintenanceMessage, setMaintenanceMessage] = useState<string | null>(null);

  // Load server status from JSON file
  const fetchServerStatus = useCallback(async () => {
    setIsRefreshing(true);

    // Simulate a small delay to show loading state
    await new Promise(resolve => setTimeout(resolve, 500));

    try {
      // In a real implementation, you might fetch from an API
      // For now, we'll use the static JSON data
      const data = serverStatusData as ServerStatusData;
      
      setStatus(data.status);
      setPlayerCount(data.playerCount);
      setLastUpdated(new Date(data.lastUpdated));
      setMaintenanceMessage(data.maintenanceMessage);
    } catch (error) {
      console.error('Failed to fetch server status:', error);
      setStatus("offline");
      setPlayerCount(0);
      setLastUpdated(new Date());
    }

    setIsRefreshing(false);
  }, []);

  useEffect(() => {
    setIsMounted(true);
    fetchServerStatus();

    // Setup a refresh every 5 minutes (in a real implementation)
    const intervalId = setInterval(fetchServerStatus, 5 * 60 * 1000);

    return () => clearInterval(intervalId);
  }, [fetchServerStatus]);

  const handleRefresh = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    fetchServerStatus();
  };

  // Status indicator configuration
  const statusConfig = {
    online: {
      icon: <Check className="h-4 w-4" />,
      color: "text-green-500",
      bgColor: "bg-green-500/10",
      text: "Online",
      border: "border-green-500/20"
    },
    "high-traffic": {
      icon: <AlertTriangle className="h-4 w-4" />,
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10",
      text: "High Traffic",
      border: "border-yellow-500/20"
    },
    maintenance: {
      icon: <Clock className="h-4 w-4" />,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      text: "Maintenance",
      border: "border-blue-500/20"
    },
    offline: {
      icon: <X className="h-4 w-4" />,
      color: "text-red-500",
      bgColor: "bg-red-500/10",
      text: "Offline",
      border: "border-red-500/20"
    },
    loading: {
      icon: <RefreshCw className="h-4 w-4 animate-spin" />,
      color: "text-gray-400",
      bgColor: "bg-gray-500/10",
      text: "Checking...",
      border: "border-gray-500/20"
    }
  };

  const config = statusConfig[status];

  return (
    <div className={`flex flex-col ${className}`}>
      <div className={`rounded-md border px-3 py-2 ${config.border} ${config.bgColor}`}>
        <div className="flex items-center gap-2">
          <div className={`${config.color}`}>
            {config.icon}
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className={`text-sm font-medium ${config.color}`}>
                Server: {config.text}
              </span>
              {showRefresh && (
                <button
                  onClick={handleRefresh}
                  disabled={isRefreshing}
                  className="text-gray-400 hover:text-gray-300 disabled:opacity-50"
                  title="Refresh server status"
                >
                  <RefreshCw className={`h-3.5 w-3.5 ${isRefreshing ? 'animate-spin' : ''}`} />
                </button>
              )}
            </div>
            {status === "online" || status === "high-traffic" ? (
              <span className="text-xs text-gray-400">
                {playerCount} players online
              </span>
            ) : status === "maintenance" && maintenanceMessage ? (
              <span className="text-xs text-gray-400">
                {maintenanceMessage}
              </span>
            ) : (
              <span className="text-xs text-gray-400">
                {status === "maintenance" ? "Scheduled maintenance" : "Please try again later"}
              </span>
            )}
          </div>
        </div>
      </div>
      <div className="text-xs text-gray-500 text-right mt-1">
        Last updated: {isMounted ? lastUpdated.toLocaleTimeString() : 'Loading...'}
      </div>
    </div>
  );
}
