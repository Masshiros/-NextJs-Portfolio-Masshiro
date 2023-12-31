/* eslint-disable @next/next/no-html-link-for-pages */
import Head from "next/head";
import BackgroundImage from "../assets/images/background.jpg";
import Image from "next/image";
const Home = () => {
  return (
    <>
      <Head>
        <title>Portofilo | Nguyen Vu</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="wrapper">
        <section className="home">
          <div className="home__titleContainer">
            <h1 className="base__title">
              Nguyên <br /> Vũ <span>_</span>
            </h1>
            <h2 className="home__subTitle">Back-End Developer</h2>
            <div className="iconContainer">
              <a href="/" className="icon">
                <span className="iconName">GitHub</span>
                <svg
                  className="iconImage"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 47"
                >
                  <path
                    fill="#FFF"
                    fillRule="evenodd"
                    d="M23.999 0C10.747 0 .001 10.787.001 24.097 0 34.74 6.877 43.772 16.415 46.958c1.2.222 1.638-.522 1.638-1.16 0-.573-.021-2.088-.033-4.098-6.676 1.456-8.085-3.23-8.085-3.23-1.09-2.784-2.664-3.525-2.664-3.525-2.18-1.495.165-1.465.165-1.465 2.408.17 3.675 2.483 3.675 2.483 2.142 3.683 5.618 2.62 6.986 2.002.217-1.557.838-2.619 1.524-3.221-5.33-.609-10.932-2.675-10.932-11.908 0-2.63.934-4.781 2.47-6.466-.247-.61-1.071-3.059.234-6.377 0 0 2.016-.647 6.6 2.47 1.916-.534 3.968-.801 6.009-.811 2.039.01 4.092.277 6.009.811 4.581-3.117 6.593-2.47 6.593-2.47 1.309 3.318.486 5.767.238 6.377 1.539 1.685 2.468 3.835 2.468 6.466 0 9.256-5.612 11.293-10.958 11.89.861.744 1.629 2.213 1.629 4.462 0 3.22-.03 5.819-.03 6.61 0 .644.432 1.394 1.65 1.157 9.53-3.192 16.4-12.217 16.4-22.858C48 10.787 37.255 0 23.999 0"
                  ></path>
                </svg>
              </a>
              <a href="" className="icon">
                <span className="iconName">Linkedin</span>
                <svg
                  className="iconImage"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 44 40"
                >
                  <path
                    fill="#FFF"
                    fillRule="evenodd"
                    d="M44 40h-9.725V25.938c0-3.68-1.52-6.193-4.866-6.193-2.558 0-3.981 1.696-4.643 3.33-.249.586-.21 1.403-.21 2.22V40h-9.634s.124-24.909 0-27.173h9.634v4.265c.57-1.865 3.648-4.526 8.56-4.526C39.211 12.566 44 16.474 44 24.89V40zM5.18 9.428h-.063C2.013 9.428 0 7.351 0 4.718 0 2.034 2.072 0 5.239 0c3.164 0 5.11 2.029 5.171 4.71 0 2.633-2.007 4.718-5.23 4.718zm-4.07 3.4h8.576V40H1.11V12.827z"
                  ></path>
                </svg>
              </a>
              <a href="" className="icon">
                <span className="iconName">Instagram</span>
                <svg
                  className="iconImage"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#FFF"
                    fillRule="evenodd"
                    d="M24 0c-6.518 0-7.335.028-9.895.144-2.555.117-4.3.523-5.826 1.116-1.578.613-2.917 1.434-4.25 2.768C2.693 5.362 1.872 6.701 1.26 8.28c-.593 1.526-1 3.27-1.116 5.825C.028 16.665 0 17.482 0 24s.028 7.335.144 9.895c.117 2.555.523 4.3 1.116 5.826.613 1.578 1.434 2.917 2.768 4.25 1.334 1.335 2.673 2.156 4.251 2.77 1.527.592 3.271.998 5.826 1.115 2.56.116 3.377.144 9.895.144s7.335-.028 9.895-.144c2.555-.117 4.3-.523 5.826-1.116 1.578-.613 2.916-1.434 4.25-2.768 1.335-1.334 2.156-2.673 2.769-4.251.593-1.527.999-3.271 1.116-5.826.116-2.56.144-3.377.144-9.895s-.028-7.335-.144-9.895c-.117-2.555-.523-4.3-1.116-5.826-.613-1.578-1.434-2.917-2.768-4.25-1.335-1.335-2.673-2.156-4.251-2.769-1.527-.593-3.271-1-5.826-1.116C31.335.028 30.518 0 24 0zm0 4.324c6.408 0 7.167.025 9.698.14 2.34.107 3.61.498 4.456.827 1.12.435 1.92.955 2.76 1.795.84.84 1.36 1.64 1.795 2.76.329.845.72 2.116.827 4.456.115 2.53.14 3.29.14 9.698s-.025 7.167-.14 9.698c-.107 2.34-.498 3.61-.827 4.457-.435 1.12-.955 1.92-1.795 2.76-.84.839-1.64 1.359-2.76 1.794-.845.33-2.116.72-4.456.827-2.53.115-3.29.14-9.698.14-6.409 0-7.168-.025-9.698-.14-2.34-.107-3.61-.498-4.457-.827-1.12-.435-1.92-.955-2.76-1.795-.839-.84-1.36-1.64-1.794-2.76-.33-.845-.72-2.116-.827-4.456-.115-2.53-.14-3.29-.14-9.698s.025-7.167.14-9.698c.107-2.34.498-3.61.827-4.457.435-1.12.955-1.92 1.795-2.759.84-.84 1.64-1.36 2.76-1.795.845-.33 2.116-.72 4.456-.827 2.53-.115 3.29-.14 9.698-.14zm0 7.352c-6.807 0-12.324 5.517-12.324 12.324 0 6.807 5.517 12.324 12.324 12.324 6.807 0 12.324-5.517 12.324-12.324 0-6.807-5.517-12.324-12.324-12.324zM24 32a8 8 0 110-16 8 8 0 010 16zm15.691-20.811a2.88 2.88 0 11-5.76 0 2.88 2.88 0 015.76 0z"
                  ></path>
                </svg>
              </a>
              <a href="" className="icon">
                <span className="iconName">CV</span>
                <svg
                  className="iconImage"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#FFF"
                    d="M124 80v322c0 7.7-6.3 14-14 14s-14-6.3-14-14V112H80c-17.7 0-32 14.3-32 32v288c0 17.7 14.3 32 32 32h353.1c17 0 30.9-13.8 30.9-30.9V80c0-17.7-14.3-32-32-32l-278 2c-17.7 0-30 12.3-30 30zm66 32h84c7.7 0 14 6.3 14 14s-6.3 14-14 14h-84c-7.7 0-14-6.3-14-14s6.3-14 14-14zm0 160h148c7.7 0 14 6.3 14 14s-6.3 14-14 14H190c-7.7 0-14-6.3-14-14s6.3-14 14-14zm196 108H190c-7.7 0-14-6.3-14-14s6.3-14 14-14h196c7.7 0 14 6.3 14 14s-6.3 14-14 14zm0-160H190c-7.7 0-14-6.3-14-14s6.3-14 14-14h196c7.7 0 14 6.3 14 14s-6.3 14-14 14z"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="photoContainer">
            <div className="drawCanvas">
              <Image
                src={BackgroundImage}
                className="illustrationImage"
                alt=""
                layout="fill"
                sizes="50vw"
                priority
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
