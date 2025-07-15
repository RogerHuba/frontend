import { CharacterBuilder } from "@/components/character-builder/CharacterBuilder";
import { Navigation } from "@/components/Navigation";
import { ServerInfoFooter } from "@/components/ServerInfoFooter";

export default function CharacterBuilderPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navigation />
      
      <div className="flex-grow">
        <CharacterBuilder />
      </div>
      
      <ServerInfoFooter />
    </main>
  );
}
