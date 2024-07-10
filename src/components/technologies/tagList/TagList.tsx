import React from "react";
import { node, html, fig, js, css, bs, react, redux, ex, seq, postg, postm } from "../../../assets/index";

const TagList: React.FC = React.memo(() => {
    return (
        <div>
            <section 
                className="row d-flex justify-content-center align-items-center my-md-5 d-none d-sm-block" 
                aria-label="Lista de tecnologías utilizadas en el proyecto"
            >
                <div className="col">
                    <div className="tag-list">
                        <div className="inner">
                            {/* Primer conjunto */}
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={html} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="HTML" 
                                    loading="lazy"
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={css} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="CSS" 
                                    loading="lazy"
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={js} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="JavaScript" 
                                    loading="lazy"
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={bs} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="Bootstrap" 
                                    loading="lazy"
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={fig} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="Figma" 
                                    loading="lazy"
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={node} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="Node.js" 
                                    loading="lazy"
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={react} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="React" 
                                    loading="lazy"
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={redux} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="Redux" 
                                    loading="lazy"
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={ex} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="Express.js" 
                                    loading="lazy"
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={seq} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="Sequelize" 
                                    loading="lazy"
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={postg} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="PostgreSQL" 
                                    loading="lazy"
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={postm} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="Postman" 
                                    loading="lazy"
                                />
                            </div>
                            <div className="fade"></div>

                            {/* Segundo conjunto (duplicado para efecto de carrusel infinito) */}
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={html} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="HTML" 
                                    loading="lazy"
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={css} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="CSS" 
                                    loading="lazy"
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={js} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="JavaScript" 
                                    loading="lazy"
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={bs} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="Bootstrap" 
                                    loading="lazy"
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={fig} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="Figma" 
                                    loading="lazy"
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={node} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="Node.js" 
                                    loading="lazy"
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={react} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="React" 
                                    loading="lazy"
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={redux} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="Redux" 
                                    loading="lazy"
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={ex} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="Express.js" 
                                    loading="lazy"
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={seq} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="Sequelize" 
                                    loading="lazy"
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={postg} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="PostgreSQL" 
                                    loading="lazy"
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={postm} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="Postman" 
                                    loading="lazy"
                                />
                            </div>
                            <div className="fade"></div>
                        </div>
                    </div>
                </div>
            </section>

            <section 
                className="row d-flex justify-content-center align-items-center my-5 d-block d-sm-none svg-custom"
                aria-label="Lista de tecnologías utilizadas en el proyecto"
            >
                <div className="col-12 text-center mb-3">
                    <div className="tag-list">
                        <div className="inner">
                            {/* Primer conjunto */}
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={html} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="HTML" 
                                    loading="lazy"
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={css} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="CSS" 
                                    loading="lazy"
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={js} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="JavaScript" 
                                    loading="lazy"
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={bs} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="Bootstrap" 
                                    loading="lazy"
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={fig} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="Figma" 
                                    loading="lazy"
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={node} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="Node.js" 
                                    loading="lazy"
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={react} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="React" 
                                    loading="lazy"
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={redux} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="Redux" 
                                    loading="lazy"
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={ex} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="Express.js" 
                                    loading="lazy"
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={seq} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="Sequelize" 
                                    loading="lazy"
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={postg} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="PostgreSQL" 
                                    loading="lazy"
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={postm} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="Postman" 
                                    loading="lazy"
                                />
                            </div>
                            <div className="fade"></div>

                            {/* Segundo conjunto (duplicado para efecto de carrusel infinito) */}
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={html} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="HTML" 
                                    loading="lazy"
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={css} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="CSS" 
                                    loading="lazy"
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={js} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="JavaScript" 
                                    loading="lazy"
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={bs} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="Bootstrap" 
                                    loading="lazy"
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={fig} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="Figma" 
                                    loading="lazy"
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={node} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="Node.js" 
                                    loading="lazy"
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={react} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="React" 
                                    loading="lazy"
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={redux} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="Redux" 
                                    loading="lazy"
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={ex} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="Express.js" 
                                    loading="lazy"
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={seq} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="Sequelize" 
                                    loading="lazy"
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={postg} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="PostgreSQL" 
                                    loading="lazy"
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={postm} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="Postman" 
                                    loading="lazy"
                                />
                            </div>
                            <div className="fade"></div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
});

export default TagList;
