import { Trans } from '@lingui/macro';
import { Button } from '@mui/material';
import dynamic from 'next/dynamic';
import { useWalletModalContext } from 'src/hooks/useWalletModal';
import { useRootStore } from 'src/store/root';
import { AUTH } from 'src/utils/mixPanelEvents';

const WalletModal = dynamic(() => import('./WalletModal').then((module) => module.WalletModal));

export interface ConnectWalletProps {
  funnel?: string;
}

export const ConnectWalletButton: React.FC<ConnectWalletProps> = ({ funnel }) => {
  const { setWalletModalOpen } = useWalletModalContext();
  const trackEvent = useRootStore((store) => store.trackEvent);

  return (
    <>
      <Button
        variant="gradient"
        style={{ padding: '10px 20px' }}
        onClick={() => {
          trackEvent(AUTH.CONNECT_WALLET, { funnel: funnel });
          setWalletModalOpen(true);
        }}
      >
        <Trans>Connect wallet</Trans>
      </Button>
      <WalletModal />
    </>
  );
};
