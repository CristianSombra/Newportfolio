
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
                                    srcSet={`${html} 1x, ${html.replace('upload', 'upload/c_scale,w_800')} 2x`} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="HTML" 
                                    loading="lazy"
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={css} 
                                    srcSet={`${css} 1x, ${css.replace('upload', 'upload/c_scale,w_800')} 2x`} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="CSS" 
                                    loading="lazy"
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={js} 
                                    srcSet={`${js} 1x, ${js.replace('upload', 'upload/c_scale,w_800')} 2x`} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="JavaScript" 
                                    loading="lazy"
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={bs} 
                                    srcSet={`${bs} 1x, ${bs.replace('upload', 'upload/c_scale,w_800')} 2x`} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="Bootstrap" 
                                    loading="lazy"
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={fig} 
                                    srcSet={`${fig} 1x, ${fig.replace('upload', 'upload/c_scale,w_800')} 2x`} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="Figma" 
                                    loading="lazy"
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={node} 
                                    srcSet={`${node} 1x, ${node.replace('upload', 'upload/c_scale,w_800')} 2x`} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="Node.js" 
                                    loading="lazy"
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={react} 
                                    srcSet={`${react} 1x, ${react.replace('upload', 'upload/c_scale,w_800')} 2x`} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="React" 
                                    loading="lazy"
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={redux} 
                                    srcSet={`${redux} 1x, ${redux.replace('upload', 'upload/c_scale,w_800')} 2x`} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="Redux" 
                                    loading="lazy"
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={ex} 
                                    srcSet={`${ex} 1x, ${ex.replace('upload', 'upload/c_scale,w_800')} 2x`} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="Express.js" 
                                    loading="lazy"
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={seq} 
                                    srcSet={`${seq} 1x, ${seq.replace('upload', 'upload/c_scale,w_800')} 2x`} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="Sequelize" 
                                    loading="lazy"
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={postg} 
                                    srcSet={`${postg} 1x, ${postg.replace('upload', 'upload/c_scale,w_800')} 2x`} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="PostgreSQL" 
                                    loading="lazy"
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={postm} 
                                    srcSet={`${postm} 1x, ${postm.replace('upload', 'upload/c_scale,w_800')} 2x`} 
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
                                    srcSet={`${html} 1x, ${html.replace('upload', 'upload/c_scale,w_800')} 2x`} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="HTML" 
                                    loading="lazy"
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={css} 
                                    srcSet={`${css} 1x, ${css.replace('upload', 'upload/c_scale,w_800')} 2x`} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="CSS" 
                                    loading="lazy"
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={js} 
                                    srcSet={`${js} 1x, ${js.replace('upload', 'upload/c_scale,w_800')} 2x`} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="JavaScript" 
                                    loading="lazy"
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={bs} 
                                    srcSet={`${bs} 1x, ${bs.replace('upload', 'upload/c_scale,w_800')} 2x`} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="Bootstrap" 
                                    loading="lazy"
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={fig} 
                                    srcSet={`${fig} 1x, ${fig.replace('upload', 'upload/c_scale,w_800')} 2x`} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="Figma" 
                                    loading="lazy"
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={node} 
                                    srcSet={`${node} 1x, ${node.replace('upload', 'upload/c_scale,w_800')} 2x`} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="Node.js" 
                                    loading="lazy"
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={react} 
                                    srcSet={`${react} 1x, ${react.replace('upload', 'upload/c_scale,w_800')} 2x`} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="React" 
                                    loading="lazy"
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={redux} 
                                    srcSet={`${redux} 1x, ${redux.replace('upload', 'upload/c_scale,w_800')} 2x`} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="Redux" 
                                    loading="lazy"
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={ex} 
                                    srcSet={`${ex} 1x, ${ex.replace('upload', 'upload/c_scale,w_800')} 2x`} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="Express.js" 
                                    loading="lazy"
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={seq} 
                                    srcSet={`${seq} 1x, ${seq.replace('upload', 'upload/c_scale,w_800')} 2x`} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="Sequelize" 
                                    loading="lazy"
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={postg} 
                                    srcSet={`${postg} 1x, ${postg.replace('upload', 'upload/c_scale,w_800')} 2x`} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="PostgreSQL" 
                                    loading="lazy"
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={postm} 
                                    srcSet={`${postm} 1x, ${postm.replace('upload', 'upload/c_scale,w_800')} 2x`} 
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
                                    srcSet={`${html} 1x, ${html.replace('upload', 'upload/c_scale,w_800')} 2x`} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="HTML" 
                                    loading="lazy"
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={css} 
                                    srcSet={`${css} 1x, ${css.replace('upload', 'upload/c_scale,w_800')} 2x`} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="CSS" 
                                    loading="lazy"
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={js} 
                                    srcSet={`${js} 1x, ${js.replace('upload', 'upload/c_scale,w_800')} 2x`} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="JavaScript" 
                                    loading="lazy"
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={bs} 
                                    srcSet={`${bs} 1x, ${bs.replace('upload', 'upload/c_scale,w_800')} 2x`} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="Bootstrap" 
                                    loading="lazy"
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={fig} 
                                    srcSet={`${fig} 1x, ${fig.replace('upload', 'upload/c_scale,w_800')} 2x`} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="Figma" 
                                    loading="lazy"
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={node} 
                                    srcSet={`${node} 1x, ${node.replace('upload', 'upload/c_scale,w_800')} 2x`} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="Node.js" 
                                    loading="lazy"
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={react} 
                                    srcSet={`${react} 1x, ${react.replace('upload', 'upload/c_scale,w_800')} 2x`} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="React" 
                                    loading="lazy"
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={redux} 
                                    srcSet={`${redux} 1x, ${redux.replace('upload', 'upload/c_scale,w_800')} 2x`} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="Redux" 
                                    loading="lazy"
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={ex} 
                                    srcSet={`${ex} 1x, ${ex.replace('upload', 'upload/c_scale,w_800')} 2x`} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="Express.js" 
                                    loading="lazy"
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={seq} 
                                    srcSet={`${seq} 1x, ${seq.replace('upload', 'upload/c_scale,w_800')} 2x`} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="Sequelize" 
                                    loading="lazy"
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={postg} 
                                    srcSet={`${postg} 1x, ${postg.replace('upload', 'upload/c_scale,w_800')} 2x`} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="PostgreSQL" 
                                    loading="lazy"
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={postm} 
                                    srcSet={`${postm} 1x, ${postm.replace('upload', 'upload/c_scale,w_800')} 2x`} 
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
                                    srcSet={`${html} 1x, ${html.replace('upload', 'upload/c_scale,w_800')} 2x`} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="HTML" 
                                    loading="lazy"
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={css} 
                                    srcSet={`${css} 1x, ${css.replace('upload', 'upload/c_scale,w_800')} 2x`} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="CSS" 
                                    loading="lazy"
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={js} 
                                    srcSet={`${js} 1x, ${js.replace('upload', 'upload/c_scale,w_800')} 2x`} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="JavaScript" 
                                    loading="lazy"
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={bs} 
                                    srcSet={`${bs} 1x, ${bs.replace('upload', 'upload/c_scale,w_800')} 2x`} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="Bootstrap" 
                                    loading="lazy"
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={fig} 
                                    srcSet={`${fig} 1x, ${fig.replace('upload', 'upload/c_scale,w_800')} 2x`} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="Figma" 
                                    loading="lazy"
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={node} 
                                    srcSet={`${node} 1x, ${node.replace('upload', 'upload/c_scale,w_800')} 2x`} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="Node.js" 
                                    loading="lazy"
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={react} 
                                    srcSet={`${react} 1x, ${react.replace('upload', 'upload/c_scale,w_800')} 2x`} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="React" 
                                    loading="lazy"
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={redux} 
                                    srcSet={`${redux} 1x, ${redux.replace('upload', 'upload/c_scale,w_800')} 2x`} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="Redux" 
                                    loading="lazy"
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={ex} 
                                    srcSet={`${ex} 1x, ${ex.replace('upload', 'upload/c_scale,w_800')} 2x`} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="Express.js" 
                                    loading="lazy"
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={seq} 
                                    srcSet={`${seq} 1x, ${seq.replace('upload', 'upload/c_scale,w_800')} 2x`} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="Sequelize" 
                                    loading="lazy"
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={postg} 
                                    srcSet={`${postg} 1x, ${postg.replace('upload', 'upload/c_scale,w_800')} 2x`} 
                                    sizes="(max-width: 600px) 480px, 800px" 
                                    alt="PostgreSQL" 
                                    loading="lazy"
                                />
                            </div>
                            <div className="tag">
                                <span></span>
                                <img 
                                    src={postm} 
                                    srcSet={`${postm} 1x, ${postm.replace('upload', 'upload/c_scale,w_800')} 2x`} 
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
