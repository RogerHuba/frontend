# Team Positions Management

## Overview
The "Join the Team" page now pulls job positions from a JSON file located at `/src/data/teamPositions.json`. This allows for easy management of available positions without needing to modify the component code.

## Adding a New Position

To add a new team position, add a new object to the `teamPositions.json` array:

```json
{
  "id": "unique-position-id",
  "title": "Position Title",
  "icon": "IconName",
  "description": "Detailed description of the role and responsibilities.",
  "requirements": [
    "First requirement",
    "Second requirement",
    "Third requirement"
  ],
  "applicationEmail": "devs@swginfinity.com",
  "applicationNote": "Apply by emailing devs@swginfinity.com with examples of your work and why you'd be suitable for this position."
}
```

## Available Icons

The following Lucide React icons are available for use:
- `Code` - For programming/development roles
- `Users` - For community/management roles
- `MessageCircle` - For communication/content roles
- `Wrench` - For technical support roles
- `Brush` - For creative/design roles
- `Database` - For database/technical roles
- `Shield` - For security/QA roles
- `HelpCircle` - For documentation/help roles

## Editing Existing Positions

To modify an existing position, simply edit the corresponding object in the `teamPositions.json` file. The page will automatically reflect the changes after the next build.

## Removing Positions

To remove a position, delete the corresponding object from the `teamPositions.json` array.

## TypeScript Support

The positions use the `TeamPosition` interface defined in `/src/types/teamPosition.ts` for type safety.
