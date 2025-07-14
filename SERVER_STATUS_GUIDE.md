# Server Status Management

## Overview

The server status widget at the top of all pages now pulls information from a JSON file located at `/src/data/serverStatus.json`. This allows for easy management of server status information without needing to modify the component code.

## Server Status Data Structure

The `serverStatus.json` file contains the following information:

```json
{
  "status": "online",
  "playerCount": 847,
  "maxPlayers": 1500,
  "serverName": "SWG Infinity",
  "lastUpdated": "2025-07-09T15:30:00Z",
  "maintenanceMessage": null,
  "motd": "Welcome to Star Wars Galaxies Infinity!",
  "events": [
    {
      "name": "Double XP Weekend",
      "active": false,
      "startTime": "2025-07-12T18:00:00Z",
      "endTime": "2025-07-14T23:59:59Z"
    }
  ],
  "serverInfo": {
    "uptime": "99.8%",
    "version": "2.0.97",
    "location": "US East",
    "timezone": "EST"
  }
}
```

## Status Values

The `status` field can have the following values:

- **`"online"`** - Server is running normally (green indicator)
- **`"high-traffic"`** - Server is experiencing high traffic (yellow indicator)
- **`"maintenance"`** - Server is under maintenance (blue indicator)
- **`"offline"`** - Server is offline or unreachable (red indicator)

## Updating Server Status

### Player Count

Update the `playerCount` field with the current number of online players:

```json
"playerCount": 847
```

### Server Status

Change the `status` field to reflect the current server state:

```json
"status": "online"
```

### Maintenance Message

When the server is in maintenance mode, you can provide a custom message:

```json
"status": "maintenance",
"maintenanceMessage": "Server restart in progress. Expected downtime: 30 minutes"
```

### Last Updated

Always update the `lastUpdated` timestamp when making changes:

```json
"lastUpdated": "2025-07-09T15:30:00Z"
```

## Events System

The events array can contain special server events that might be displayed in the future:

```json
"events": [
  {
    "name": "Double XP Weekend",
    "active": true,
    "startTime": "2025-07-12T18:00:00Z",
    "endTime": "2025-07-14T23:59:59Z"
  }
]
```

## Server Information

Additional server metadata is stored in the `serverInfo` object:

```json
"serverInfo": {
  "uptime": "99.8%",
  "version": "2.0.97",
  "location": "US East",
  "timezone": "EST"
}
```

## TypeScript Support

The server status data uses the `ServerStatusData` interface defined in `/src/types/serverStatus.ts` for type safety.

## Automatic Updates

The component refreshes the data every 5 minutes automatically. Manual refresh is also available via the refresh button in some views.

## Future Enhancements

The current implementation uses static JSON data. In the future, this could be enhanced to:

- Fetch data from a real server API
- Display server events and announcements
- Show detailed server information
- Provide historical uptime data
