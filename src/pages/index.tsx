import MenuBar from '@/components/common/MenuBar';
import MobileLayout from '@/components/layout/MobileLayout';
import { Metadata } from 'next';

export default function Main() {
  return (
    <MobileLayout>
      <MenuBar />
      hello
    </MobileLayout>
  );
}
