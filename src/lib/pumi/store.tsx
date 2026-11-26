import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { initialContents, metrics, type Content, type Interest } from "./data";
interface State {
  contents: Content[];
  interests: Interest[];
  answers: string[];
  selected: string[];
  metrics: typeof metrics;
}
const initial: State = {
  contents: initialContents,
  interests: [],
  answers: [],
  selected: [],
  metrics,
};
const Store = createContext<{
  state: State;
  update: (fn: (s: State) => State) => void;
  ready: boolean;
}>({ state: initial, update: () => {}, ready: false });
export function PumiProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<State>(initial);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    try {
      const raw = localStorage.getItem("pumi-demo-v1");
      if (raw) {
        const parsed = JSON.parse(raw) as State;
        if (Array.isArray(parsed.contents) && Array.isArray(parsed.interests))
          setState({ ...initial, ...parsed });
      }
    } catch {
      localStorage.removeItem("pumi-demo-v1");
    }
    setReady(true);
  }, []);
  useEffect(() => {
    if (ready) {
      try {
        localStorage.setItem("pumi-demo-v1", JSON.stringify(state));
      } catch {
        /* Keep session state when browser storage is unavailable. */
      }
    }
  }, [state, ready]);
  return (
    <Store.Provider value={{ state, update: (fn) => setState((s) => fn(s)), ready }}>
      {children}
    </Store.Provider>
  );
}
export function usePumi() {
  return useContext(Store);
}
