import { CheckAllButton } from "../CheckAllButton/CheckAllButton";
import { SearchBar } from "../SearchBar/SearchBar";

export function ControlPanel() {
  return (
    <section className="control-panel">
      <CheckAllButton />
      <SearchBar />
    </section>
  );
}
