// Import the useState hook
import { useState } from "react";

// Custom hook for managing modal state
export function useModalState() {
  const [modalOpen, setModalOpen] = useState(false);

  return [modalOpen, setModalOpen];
}
