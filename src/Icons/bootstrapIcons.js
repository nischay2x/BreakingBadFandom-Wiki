import React from 'react';

export const Search = (props) => {
    const { size } = props;
    return(
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
        </svg>
    )
}

export const LeftArrowFill = (props) => {
    const { size } = props;
    return(
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" className="bi bi-arrow-left-square-fill" viewBox="0 0 16 16">
            <path d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1z"/>
        </svg>
    )
}

export const RightArrowFill = (props) => {
    const {size} = props;
    return(
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" className="bi bi-arrow-right-square-fill" viewBox="0 0 16 16">
            <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1z"/>
        </svg>
    )
}

export const WebsiteLogo = () => {
    return(
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" id="svg-canvas" className="canvas">
			<g id="logo" featurekey="nameFeature-0" transform="" fill="#07689f">
				<path d="M20.12 17.32 l-11.72 0 l0 6.12 l9.64 0 l0 5 l-9.64 0 l0 11.56 l-6 0 l0 -28 l17.72 0 l0 5.32 z M32.64 18.84 c4.72 0 10.88 3.56 10.88 10.84 s-6.16 10.72 -10.88 10.72 s-10.92 -3.44 -10.92 -10.72 s6.2 -10.84 10.92 -10.84 z M32.64 23.92 c-2.6 0 -5.36 1.96 -5.36 5.76 c0 3.68 2.76 5.64 5.36 5.64 c2.56 0 5.36 -1.96 5.36 -5.64 c0 -3.8 -2.8 -5.76 -5.36 -5.76 z M57.24 18.84 c4.72 0 10.88 3.56 10.88 10.84 s-6.16 10.72 -10.88 10.72 s-10.92 -3.44 -10.92 -10.72 s6.2 -10.84 10.92 -10.84 z M57.24 23.92 c-2.6 0 -5.36 1.96 -5.36 5.76 c0 3.68 2.76 5.64 5.36 5.64 c2.56 0 5.36 -1.96 5.36 -5.64 c0 -3.8 -2.8 -5.76 -5.36 -5.76 z M86.96000000000001 11.719999999999999 l5.72 0 l0 10.6 l0 17.68 l-5.72 0 l0 -2.56 c-0.12 0.84 -2.16 2.96 -5.76 2.96 c-4.76 0 -10.28 -3.44 -10.28 -10.84 c0 -7.16 5.52 -10.72 10.28 -10.72 c3.6 0 5.64 2.24 5.76 2.68 l0 -9.8 z M82.00000000000001 35.32 c2.8 0 5.24 -1.92 5.24 -5.76 c0 -3.72 -2.44 -5.64 -5.24 -5.64 c-2.88 0 -5.52 1.96 -5.52 5.64 c0 3.8 2.64 5.76 5.52 5.76 z M102.56000000000002 11.719999999999999 l0 4.88 l-5.72 0 l0 -4.88 l5.72 0 z M102.56000000000002 19.2 l0 20.8 l-5.72 0 l0 -20.8 l5.72 0 z M116.96000000000001 18.84 c4.72 0 11.24 3.56 10 12.76 l-15.12 0 c0.72 2.6 2.88 3.96 5.68 3.96 c2.6 0 3.6 -0.6 5.08 -1.4 l3.16 3.08 c-1.8 1.88 -4.36 3.16 -8.44 3.16 c-5.2 0 -11.28 -3.56 -11.28 -10.72 c0 -7.28 6.2 -10.84 10.92 -10.84 z M116.96000000000001 23.72 c-2.08 0 -4.28 1.28 -5.04 3.84 l10 0 c-0.64 -2.56 -2.92 -3.84 -4.96 -3.84 z M158.36 24.48 c2.96 0.8 5.76 3.44 5.76 7.32 c0 5.08 -3.2 8.2 -10.16 8.2 l-11.04 0 l0 -28 l10.44 0 c5.8 0 8.72 3.28 8.72 7.04 c0 2.96 -1.92 4.64 -3.72 5.44 z M152.8 17.12 l-4.04 0 l0 5.64 l4.04 0 c2.48 0 3.48 -1.16 3.48 -2.84 c0 -1.8 -1.16 -2.8 -3.48 -2.8 z M153.64000000000001 34.88 c3.2 0 4.64 -1.32 4.64 -3.8 c0 -2.12 -1.44 -3.6 -4.88 -3.6 l-4.64 0 l0 7.4 l4.88 0 z M175.20000000000002 40.32 c-3.96 0 -7.88 -2.6 -7.88 -9.16 l0 -11.96 l5.72 0 l0 11.56 c0 3.4 1.32 4.56 3.52 4.56 c3.04 0 4.84 -2.88 5.28 -4.32 l0 -11.8 l5.72 0 l0 20.8 l-5.72 0 l0 -3.84 c-0.4 1.08 -2.64 4.16 -6.64 4.16 z M207.08 11.719999999999999 l5.72 0 l0 10.6 l0 17.68 l-5.72 0 l0 -2.56 c-0.12 0.84 -2.16 2.96 -5.76 2.96 c-4.76 0 -10.28 -3.44 -10.28 -10.84 c0 -7.16 5.52 -10.72 10.28 -10.72 c3.6 0 5.64 2.24 5.76 2.68 l0 -9.8 z M202.12 35.32 c2.8 0 5.24 -1.92 5.24 -5.76 c0 -3.72 -2.44 -5.64 -5.24 -5.64 c-2.88 0 -5.52 1.96 -5.52 5.64 c0 3.8 2.64 5.76 5.52 5.76 z M232.32000000000002 11.719999999999999 l5.72 0 l0 10.6 l0 17.68 l-5.72 0 l0 -2.56 c-0.12 0.84 -2.16 2.96 -5.76 2.96 c-4.76 0 -10.28 -3.44 -10.28 -10.84 c0 -7.16 5.52 -10.72 10.28 -10.72 c3.6 0 5.64 2.24 5.76 2.68 l0 -9.8 z M227.36 35.32 c2.8 0 5.24 -1.92 5.24 -5.76 c0 -3.72 -2.44 -5.64 -5.24 -5.64 c-2.88 0 -5.52 1.96 -5.52 5.64 c0 3.8 2.64 5.76 5.52 5.76 z M259.04 19.12 l5.72 0 l-12.72 28.48 l-5.72 0 l3.8 -8.32 l-9 -20.16 l5.72 0 l6.08 14 z"></path>
			</g>
		</svg>
    )
}

export const HomeLogo = (props) => {
    const {size} = props;
    return(
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" className="bi bi-house-fill" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
            <path fillRule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
        </svg>
    )
}

export const InstagramLogo = (props) => {
    const { size } = props;
    return(
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
        </svg>
    )
}

export const Github = (props) => {
    const {size} = props;
    return(
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
        </svg>
    )
}