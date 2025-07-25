'use client'

export default function ReviewButton({
  text = 'Get started',
  bgColor = 'white',
  textColor = 'black',
  iconBg = 'white',
  iconColor = '#7b52b9',
  boxShadowColor = '#714da6',
  iconShadowColor = '#7b52b9',
  width = 'auto',
  height = '2.8em',
  fontSize = '2vh',
  borderRadius = '0.9em',
  border = 'none',                 // Full border shorthand
  borderColor = 'white',               // Optional override
  borderWidth = '0vh',               // Optional override
  borderStyle = '',               // Optional override
}) {
  // Build dynamic border style (priority to `border`)
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
          padding: 0.35em;
          padding-left: 1.2em;
          font-size: ${fontSize};
          font-weight: 500;
          border-radius: ${borderRadius};
          border: ${resolvedBorder};
          letter-spacing: 0.05em;
          display: flex;
          align-items: center;
        //   box-shadow: inset 0 0 1.6em -0.6em ${boxShadowColor};
          overflow: hidden;
          position: relative;
          height: ${height};
          width: ${width};
          padding-right: 3.3em;
          cursor: pointer;
        }

        .cssbuttons-io-button .icon {
          background: ${iconBg};
          margin-left: 1em;
          position: absolute;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 2.2em;
          width: 2.2em;
          border-radius: 0.7em;
        //   box-shadow: 0.1em 0.1em 0.6em 0.2em ${iconShadowColor};
          right: 0.3em;
          transition: all 0.3s;
        }

        .cssbuttons-io-button:hover .icon {
          width: calc(100% - 0.6em);
        }

        .cssbuttons-io-button .icon svg {
          width: 1.1em;
          transition: transform 0.3s;
          color: ${iconColor};
        }

        .cssbuttons-io-button:hover .icon svg {
          transform: translateX(0.1em);
        }

        .cssbuttons-io-button:active .icon {
          transform: scale(0.95);
        }
      `}</style>
    </button>
  );
}
