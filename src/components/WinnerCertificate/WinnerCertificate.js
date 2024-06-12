import React, { useState } from 'react';
import domtoimage from 'dom-to-image';
import styles from './WinnerCertificate.module.sass';
import tigerSkin from '../../images/tiger_skin.png';
import Bubbles from './Bubbles';

const WinnerCertificate = ({
  name,
  age,
  hobby,
  correctAnswers,
  photo,
  state: { isEng },
}) => {
  const [errorMessage, setErrorMessage] = useState('');

  const downloadCertificate = async () => {
    try {
      const certificateElement = document.getElementById('certificate');
      if (certificateElement) {
        const dataUrl = await domtoimage.toPng(certificateElement, {
          quality: 0.95,
          scale: 1,
        });
        const link = document.createElement('a');
        link.download = 'winner_certificate.jpg';
        link.href = dataUrl;
        link.click();
      } else {
        setErrorMessage('Element with ID "certificate" not found.');
      }
    } catch (error) {
      setErrorMessage(error.message);
      console.error('Error generating certificate image:', error);
    }
  };

  const score = correctAnswers;
  const title = isEng
    ? getCertificateTitleInEng(score)
    : getCertificateTitleInUkr(score);

  return (
    <section className={styles.container}>
      <div className={styles['winner-certificate']} id='certificate'>
        {errorMessage && <div className='error-message'>{errorMessage}</div>}
        <div className={styles['certificate-box']}>
          {photo && (
            <img src={photo} alt='Winner' className={styles['winner-photo']} />
          )}
          <div>
            <h2 className={styles.title}>
              {isEng
                ? `${name}, who likes ${hobby}`
                : `${name}, що полюбляє ${hobby}`}
            </h2>
            <p>
              {isEng
                ? `In the age of ${age}, has title "${title}"!`
                : `У віці ${age}, отримує титул "${title}"!`}
            </p>
            <p className={styles.score}>
              {isEng
                ? `Your score: ${score} з 12!`
                : `Ваш результат: ${score} з 12!`}
            </p>
            <p>{isEng ? 'Grrrrrrr ...' : 'Гррррррр ...'}</p>
          </div>
          <img src={tigerSkin} alt='skin' className={styles['skin-img']} />
        </div>
      </div>
      <button onClick={downloadCertificate} className={styles['btn-play']}>
        Download
      </button>
      <Bubbles />
    </section>
  );
};

const getCertificateTitleInUkr = (score) => {
  if (score >= 8) {
    return 'Маестро ментальних лабіринтів';
  } else if (score >= 6) {
    return 'Тигр наполегливого мислення';
  } else {
    return 'Обмежувач логічного лімбо';
  }
};

const getCertificateTitleInEng = (score) => {
  if (score >= 8) {
    return 'Maestro of Mental Mazes';
  } else if (score >= 6) {
    return 'Tiger of Tenacious Thinking';
  } else {
    return 'Logical Limbo Limiter';
  }
};

export default WinnerCertificate;
