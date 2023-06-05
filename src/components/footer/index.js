import { Button } from '../ui/button';
import { TextLink } from '../ui/text-link';

import styles from './footer.module.scss';

export const Footer = () => {
  return (
    <div className={styles.root}>
      <div className={styles.buttonWrapper}>
        <Button
          href="mailto:naumchikirina@yahoo.com"
          size="l"
          isLink
          label="Get in touch"
        />
      </div>
      <div className={styles.textContainer}>
        <p className={styles.text}>designed and built by {' '}
          <TextLink
            href="https://naumchik.me/"
            isOutsideLink
          >
            Irina Naumchik
          </TextLink>
        </p>
        <div className={styles.heart}></div>
      </div>

    </div>
  );
};
