import { ColorSchemeSwitch } from '@/components/ColorSchemeSwitch';
import styles from './page.module.scss';
import { Button, Stack } from '@arctic-kit/snow';

export default function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.scss file.
   */
  return (
    <div className={styles.page}>
      <Stack inline spacing={4}>
        <Button size="large">Snow everywhere</Button>
        <ColorSchemeSwitch />
      </Stack>
      <div id="welcome">
        <h1>
          <span> Hello there, </span>
          Welcome iceberg 👋
        </h1>
      </div>
    </div>
  );
}
