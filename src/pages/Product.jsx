import { Header } from "../components/header/Header";
import { useParams } from "react-router-dom";
import { cardArray } from "../constans";
export const Product = () => {
  const { id } = useParams();
  const findeProduct = cardArray.find((p) => p.id === +id);

  return (
    <>
      <Header />
      <main>
        <section className="search">
          <div className="container">
            <div className="search-box">
              <input type="text" />
              <button className="btn btn-primary search-btn">
                <img
                  className="search-btn__icon"
                  src="/image/lupa.svg"
                  alt="search"
                />
                <span className="search-btn__text">Suchen</span>
              </button>
            </div>
          </div>
        </section>
        <section className="content">
          <div className="container">
            {findeProduct ? (
              <div className="content-box">
                <div className="content-product">
                  <div className="content-product__left">
                    <h2 className="content-main__title">
                      {findeProduct.title}
                    </h2>
                    <img
                      className="content-product__img"
                      src={findeProduct.img}
                      alt="foto-product"
                    />
                    <p className="content-side__list-item--text">
                      {findeProduct.description}
                    </p>
                  </div>
                  <div className="content-product__right">
                    <h2 className="content-main__title">
                      {findeProduct.price}
                    </h2>
                    <button className="btn btn-primary btn-primary__product">
                      Kaufen
                    </button>
                  </div>
                </div>
                <div className="content-side">
                  <h3 className="content-side__title">Warum Beautiq?</h3>
                  <div className="content-side__box">
                    <div className="content-side__list">
                      <div className="content-side__list-item">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          id="Layer_1"
                          data-name="Layer 1"
                          viewBox="0 0 24 24"
                          width="512"
                          height="512"
                        >
                          <path
                            d="M19,5H17V4a3,3,0,0,0-3-3H3A3,3,0,0,0,0,4V19H2.041A3.465,3.465,0,0,0,2,19.5a3.5,3.5,0,0,0,7,0,3.465,3.465,0,0,0-.041-.5h6.082a3.465,3.465,0,0,0-.041.5,3.5,3.5,0,0,0,7,0,3.465,3.465,0,0,0-.041-.5H24V10A5.006,5.006,0,0,0,19,5Zm0,2a3,3,0,0,1,3,3v1H17V7ZM7,19.5a1.5,1.5,0,0,1-3,0,1.418,1.418,0,0,1,.093-.5H6.907A1.418,1.418,0,0,1,7,19.5ZM15,17H2V4A1,1,0,0,1,3,3H14a1,1,0,0,1,1,1Zm5,2.5a1.5,1.5,0,0,1-3,0,1.41,1.41,0,0,1,.093-.5h2.814A1.41,1.41,0,0,1,20,19.5ZM17,17V13h5v4Z"
                            fill="currentColor"
                          />
                        </svg>
                        <h5 className="content-side__list-item--title">
                          Lieferung
                        </h5>
                        <p className="content-side__list-item--text">
                          Kostenlose Rückgabe innerhalb von 14 Tagen, wenn
                          ungeöffnet.
                        </p>
                      </div>

                      <div className="content-side__list-item">
                        <svg
                          id="Layer_2"
                          height="512"
                          viewBox="0 0 24 24"
                          width="512"
                          xmlns="http://www.w3.org/2000/svg"
                          data-name="Layer 1"
                        >
                          <path
                            d="m19.535 3.122-1.656-1.658a4.968 4.968 0 0 0 -3.536-1.464h-6.343a5.006 5.006 0 0 0 -5 5v14a5.006 5.006 0 0 0 5 5h8a5.006 5.006 0 0 0 5-5v-12.343a4.968 4.968 0 0 0 -1.465-3.535zm-1.414 1.414a2.932 2.932 0 0 1 .379.464h-2.5v-2.5a3.1 3.1 0 0 1 .465.38zm.879 14.464a3 3 0 0 1 -3 3h-8a3 3 0 0 1 -3-3v-14a3 3 0 0 1 3-3h6v3a2 2 0 0 0 2 2h3zm-3-10a1 1 0 0 1 0 2h-8a1 1 0 0 1 0-2zm1 5a1 1 0 0 1 -1 1h-8a1 1 0 0 1 0-2h8a1 1 0 0 1 1 1zm-.192 3.413a1 1 0 0 1 -.217 1.394 6.464 6.464 0 0 1 -3.456 1.193 3.252 3.252 0 0 1 -2-.7c-.328-.225-.453-.3-.7-.3a3.951 3.951 0 0 0 -1.832.794 1 1 0 0 1 -1.214-1.588 5.861 5.861 0 0 1 3.05-1.206 3.025 3.025 0 0 1 1.832.655 1.347 1.347 0 0 0 .864.345 4.586 4.586 0 0 0 2.277-.809 1 1 0 0 1 1.396.222z"
                            fill="currentColor"
                          />
                        </svg>
                        <h5 className="content-side__list-item--title">
                          Zertifizierte Produkte
                        </h5>
                        <p className="content-side__list-item--text">
                          Nur geprüfte Profi-Marken. Dermatologisch getestet,
                          EU-zugelassen.
                        </p>
                      </div>
                      <div className="content-side__list-item">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          id="Layer_3"
                          data-name="Layer 1"
                          viewBox="0 0 24 24"
                          width="512"
                          height="512"
                        >
                          <path
                            d="M8.965,24H4a4,4,0,0,1-4-4V15a4,4,0,0,1,4-4h8.857a3.144,3.144,0,0,1,2.69,1.519l3.217-3.535a3.01,3.01,0,0,1,4.254-.2,3.022,3.022,0,0,1,.217,4.23l-6.8,7.637A10.012,10.012,0,0,1,8.965,24ZM4,13a2,2,0,0,0-2,2v5a2,2,0,0,0,2,2H8.965a8.005,8.005,0,0,0,5.972-2.678l6.805-7.638a1.015,1.015,0,0,0-.072-1.421A1.029,1.029,0,0,0,20.942,10a1,1,0,0,0-.7.329L15.816,15.2A3.158,3.158,0,0,1,13.3,17.252l-5.161.738a1,1,0,0,1-.284-1.98l5.162-.737A1.142,1.142,0,0,0,12.857,13Zm7-3.926a1.986,1.986,0,0,1-1.247-.436C8.041,7.264,6,5.2,6,3.2A3.109,3.109,0,0,1,9,0a2.884,2.884,0,0,1,2,.817A2.884,2.884,0,0,1,13,0a3.109,3.109,0,0,1,3,3.2c0,2-2.041,4.064-3.754,5.439A1.986,1.986,0,0,1,11,9.074ZM9,2A1.115,1.115,0,0,0,8,3.2c0,.9,1.151,2.39,3.006,3.879C12.849,5.59,14,4.1,14,3.2A1.115,1.115,0,0,0,13,2a1.115,1.115,0,0,0-1,1.2,1,1,0,0,1-2,0A1.115,1.115,0,0,0,9,2Z"
                            fill="currentColor"
                          />
                        </svg>
                        <h5 className="content-side__list-item--title">
                          Online-Schulungen
                        </h5>
                        <p className="content-side__list-item--text">
                          Kurse für Nägel, Wimpern, Pflege.
                        </p>
                      </div>
                    </div>

                    <div className="conten-side__footer">
                      <p className="conten-side__footer--item">
                        © 2025 Beautiq. Alle Rechte vorbehalten.
                      </p>
                      <a className="conten-side__footer--item" href="#!">
                        Impressum
                      </a>
                      <a className="conten-side__footer--item" href="#!">
                        Datenschutzerklärung
                      </a>
                      <a className="conten-side__footer--item" href="#!">
                        AGB
                      </a>
                      <a className="conten-side__footer--item" href="#!">
                        Widerrufsrecht
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              "Dises Produkt wurde nicht gefunden"
            )}
          </div>
        </section>
      </main>
    </>
  );
};
