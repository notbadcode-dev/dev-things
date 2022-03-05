// components/common/MenuProvider.js
import { createContext, useContext } from "react";

// Create Context object.
const DeviceContext = createContext(null);

// Export Provider.
export function DeviceProvider(props: { so: string; accesKey: string }) {
  const { so, accesKey } = props;

  return props;
}

// Export useContext Hook.
export function useDeviceContext() {
  return useContext(DeviceContext);
}
