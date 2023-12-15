import Imagenes from "../assets/Imagenes/xd.avif";
import imagenes2 from "../assets/imagenes/empresa.jpg";
import { Link } from "react-router-dom";

export const MainArticle = () => {
  return (
    <>
  <title>SRF</title>
  <link rel="stylesheet" href="index.css" />
  <div className="hero min-h-screen" style={{backgroundImage: 'url(https://img.freepik.com/foto-gratis/concepto-collage-html-css-persona_23-2150062008.jpg?w=1380&t=st=1702653069~exp=1702653669~hmac=0f12e92f2464b44e6c9f21b7dedf60e78e01c6a54a883920a7cb7d55a419b245)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <Link to={"/Register"}>
      <button className="btn btn-primary">Get Started</button>
      </Link>
    </div>
  </div>
</div>
  <div className="hero min-h-screen bg-base-200 ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="https://img.freepik.com/foto-gratis/angulo-vista-rascacielos_1359-1105.jpg?w=1380&t=st=1702653856~exp=1702654456~hmac=eebd716a83d7bbcb7243590eee8231432322a44497af96e4af069aad2bb199fe" className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
<div className="max-w-7xl mx-auto gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 content-center justify-center">
<div className="card w-96 bg-base-100 shadow-xl px-4">
  <figure className="px-10 pt-10">
    <img src="https://img.freepik.com/foto-gratis/vista-recortada-gerente-profesional-finanzas-serias-sosteniendo-calculadora-manos-verificando-ganancias-mes-compania_176420-7931.jpg?w=1380&t=st=1702656792~exp=1702657392~hmac=6dbc160ea87c719340627fb8b189ff5ad35b81469bab642ace3c2ade3a71317d" alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center ">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
<div className="card w-96 bg-base-100 shadow-xl px-4">
  <figure className="px-10 pt-10">
    <img src="https://img.freepik.com/fotos-premium/mano-lapiz-escribiendo-primer-plano-pagina-calendario_293060-6639.jpg?w=1380" alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
<div className="card w-96 bg-base-100 shadow-xl px-4">
  <figure className="px-10 pt-10">
    <img src="https://img.freepik.com/foto-gratis/experiencia-programacion-persona-que-trabaja-codigos-computadora_23-2150010125.jpg?w=1380&t=st=1702656858~exp=1702657458~hmac=4ef49a01abe475986515ad6a9da9639d313675fe45fe58034ce3ea47971089c4" alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
<div className="card w-96 bg-base-100 shadow-xl px-4">
  <figure className="px-10 pt-10">
    <img src="https://img.freepik.com/foto-gratis/hombre-barbudo-sorprendido-frustrado-camisa-blanca-mostrando-billetera-vacia_171337-18833.jpg?w=1380&t=st=1702656953~exp=1702657553~hmac=8c342ce3c54bad6452ddd1dadb022b2dacff44763aaa68dd3317451957da685e" alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
</div>
</>

    
  );
};

