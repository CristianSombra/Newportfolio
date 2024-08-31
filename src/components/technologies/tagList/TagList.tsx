import React from "react";
import { node, html, fig, js, ts, css, bs, react, redux, ex, seq, postg, postm } from "../../../assets/index";

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
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={css} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="CSS" 
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={js} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="JavaScript" 
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={ts} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="TypeScript" 
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={bs} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="Bootstrap" 
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={fig} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="Figma" 
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={node} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="Node.js" 
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={react} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="React" 
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={redux} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="Redux" 
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={ex} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="Express.js" 
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={seq} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="Sequelize" 
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={postg} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="PostgreSQL" 
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={postm} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="Postman" 
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
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={css} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="CSS" 
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={js} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="JavaScript" 
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={ts} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="TypeScript" 
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={bs} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="Bootstrap" 
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={fig} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="Figma" 
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={node} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="Node.js" 
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={react} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="React" 
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={redux} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="Redux" 
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={ex} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="Express.js" 
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={seq} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="Sequelize" 
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={postg} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="PostgreSQL" 
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={postm} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="Postman" 
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
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={css} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="CSS" 
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={js} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="JavaScript" 
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={ts} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="TypeScript" 
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={bs} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="Bootstrap" 
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={fig} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="Figma" 
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={node} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="Node.js" 
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={react} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="React" 
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={redux} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="Redux" 
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={ex} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="Express.js" 
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={seq} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="Sequelize" 
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={postg} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="PostgreSQL" 
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={postm} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="Postman" 
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
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={css} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="CSS" 
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={js} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="JavaScript" 
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={ts} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="TypeScript" 
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={bs} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="Bootstrap" 
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={fig} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="Figma" 
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={node} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="Node.js" 
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={react} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="React" 
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={redux} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="Redux" 
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={ex} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="Express.js" 
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={seq} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="Sequelize" 
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={postg} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="PostgreSQL" 
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={postm} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="Postman" 
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
