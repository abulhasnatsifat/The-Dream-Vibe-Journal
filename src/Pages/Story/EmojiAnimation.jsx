import PropTypes from 'prop-types';
import './EmojiAnimation.css';

const EmojiAnimation = ({ emoji, onAnimationEnd }) => {
    return (
        <div className='emoji-animation' onAnimationEnd={onAnimationEnd}>
            {emoji}
        </div>
    );
};

EmojiAnimation.propTypes = {
    emoji: PropTypes.string.isRequired,
    onAnimationEnd: PropTypes.func.isRequired,
};

export default EmojiAnimation;
