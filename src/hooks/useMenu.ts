import { useState, useCallback, MouseEvent } from 'react';

export const useMenu = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handleOpenMenu = useCallback((event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  }, []);

  const handleCloseMenu = useCallback(() => {
    setAnchorEl(null);
  }, []);

  return {
    anchorEl,

    handleOpenMenu,
    handleCloseMenu
  };
};
