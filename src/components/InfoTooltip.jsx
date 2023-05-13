import React from 'react';
import BadIcon from '../images/BadIcon.svg';
import GoodIcon from '../images/GoodIcon.svg';

function InfoToolTip({ isOpen, onClose, isSuccess }) {
  return (
    <div className={`popup ${isOpen ? 'popup_opened' : ''}`}>
      <div className='popup__container'>
        {isSuccess ? (
          <>
            <img className="popup__infotooltip-icon" src={`${GoodIcon}`} alt='успешная регистрация' />
            <p className="popup__infotooltip-text">Вы успешно зарегистрировались!</p>
          </>
        ) : (
          <>
            <img className='popup__infotooltip-icon' src={`${BadIcon}`} alt='не удалось зарегистрироваться' />
            <p className='popup__infotooltip-text'>Что-то пошло не так! Попробуйте ещё раз.</p>
          </>
        )}
        <button type='button' className='popup__close-button' aria-label='закрыть' onClick={onClose}></button>
      </div>
    </div>
  );
}

export default InfoToolTip;

