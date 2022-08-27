import { Button } from '../ui/button';
import { TextLink } from '../ui/text-link';

import styles from './footer.module.scss';

export const Footer = () => {
  return (
    <div className={styles.root}>
      <Button
        href="mailto:naumchikirina@yahoo.com"
        size="l"
        isLink
        label="Email us"
      />
      <p className={styles.text}>designed and built by {' '}
        <TextLink
          href="https://naumchik.me/"
          isOutsideLink
        >
          Irina Naumchik
        </TextLink>
      </p>
    </div>
  );
};
