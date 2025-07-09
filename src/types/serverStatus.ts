export interface ServerEvent {
  name: string;
  active: boolean;
  startTime: string;
  endTime: string;
}

export interface ServerInfo {
  uptime: string;
  version: string;
  location: string;
  timezone: string;
}

export interface ServerStatusData {
  status: "online" | "offline" | "maintenance" | "high-traffic";
  playerCount: number;
  maxPlayers: number;
  serverName: string;
  lastUpdated: string;
  maintenanceMessage: string | null;
  motd: string;
  events: ServerEvent[];
  serverInfo: ServerInfo;
}
