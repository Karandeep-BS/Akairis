'use client'

export default function MReviewButton({
  text = 'Get started',
  bgColor = 'white',
  textColor = 'black',
  iconBg = 'white',
  iconColor = '#7b52b9',
  boxShadowColor = '#714da6',
  iconShadowColor = '#7b52b9',
  width = '90vw',
  height = '6vh',
  fontSize = '2.2vh',
  borderRadius = '1em',
  border = 'none',
  borderColor = 'white',
  borderWidth = '0',
  borderStyle = '',
}) {
  const resolvedBorder = border !== 'none'
    ? border
    : `${borderWidth || '0'} ${borderStyle || 'solid'} ${borderColor || 'transparent'}`

  return (
    <button className="cssbuttons-io-button">
      {text}
      <div className="icon">
        <svg
          height="24"
          width="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0h24v24H0z" fill="none"></path>
          <path
            d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
            fill="currentColor"
          ></path>
        </svg>
      </div>

      <style jsx>{`
        .cssbuttons-io-button {
          background: ${bgColor};
          color: ${textColor};
          font-family: inherit;
          padding: 0.5em 1em;
          font-size: ${fontSize};
          font-weight: 500;
          border-radius: ${borderRadius};
          border: ${resolvedBorder};
          letter-spacing: 0.05em;
          display: flex;
          align-items: center;
          overflow: hidden;
          position: relative;
          height: ${height};
          width: ${width};
          padding-right: 3em;
          cursor: pointer;
        }

        .cssbuttons-io-button .icon {
          background: ${iconBg};
          margin-left: 1em;
          position: absolute;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 2.5em;
          width: 2.5em;
          border-radius: 0.7em;
          right: 0.4em;
          transition: all 0.3s;
        }

        .cssbuttons-io-button:hover .icon {
          width: calc(100% - 0.6em);
        }

        .cssbuttons-io-button .icon svg {
          width: 1.2em;
          transition: transform 0.3s;
          color: ${iconColor};
        }

        .cssbuttons-io-button:hover .icon svg {
          transform: translateX(0.1em);
        }

        .cssbuttons-io-button:active .icon {
          transform: scale(0.95);
        }

        @media (max-width: 480px) {
          .cssbuttons-io-button {
            width: 90vw;
            height: 6vh;
            font-size: 2.2vh;
            padding-right: 3em;
          }

          .cssbuttons-io-button .icon {
            height: 2.4em;
            width: 2.4em;
          }

          .cssbuttons-io-button .icon svg {
            width: 1.1em;
          }
        }
      `}</style>
    </button>
  );
}
