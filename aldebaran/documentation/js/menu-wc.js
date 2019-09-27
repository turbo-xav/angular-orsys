'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">aldebaran documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-fb7726772e8575ccdb91bf40e4cd24b9"' : 'data-target="#xs-components-links-module-AppModule-fb7726772e8575ccdb91bf40e4cd24b9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-fb7726772e8575ccdb91bf40e4cd24b9"' :
                                            'id="xs-components-links-module-AppModule-fb7726772e8575ccdb91bf40e4cd24b9"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SearchBarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SearchBarComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DetailModule.html" data-type="entity-link">DetailModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DetailModule-8dc12e78a118c392296ba1c9b923955b"' : 'data-target="#xs-components-links-module-DetailModule-8dc12e78a118c392296ba1c9b923955b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DetailModule-8dc12e78a118c392296ba1c9b923955b"' :
                                            'id="xs-components-links-module-DetailModule-8dc12e78a118c392296ba1c9b923955b"' }>
                                            <li class="link">
                                                <a href="components/DetailCommentComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DetailCommentComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DetailCommentInputComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DetailCommentInputComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DetailCommentListComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DetailCommentListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DetailCommentLoginComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DetailCommentLoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DetailComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DetailComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomeModule.html" data-type="entity-link">HomeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HomeModule-a666b4047df36d1e5623d48c9ef2d00d"' : 'data-target="#xs-components-links-module-HomeModule-a666b4047df36d1e5623d48c9ef2d00d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomeModule-a666b4047df36d1e5623d48c9ef2d00d"' :
                                            'id="xs-components-links-module-HomeModule-a666b4047df36d1e5623d48c9ef2d00d"' }>
                                            <li class="link">
                                                <a href="components/HomeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ListModule.html" data-type="entity-link">ListModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ListModule-65312a05ff3795638c6ad2e5d952a479"' : 'data-target="#xs-components-links-module-ListModule-65312a05ff3795638c6ad2e5d952a479"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ListModule-65312a05ff3795638c6ad2e5d952a479"' :
                                            'id="xs-components-links-module-ListModule-65312a05ff3795638c6ad2e5d952a479"' }>
                                            <li class="link">
                                                <a href="components/ListComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ListComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link">SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-03cfa0d12da3b7213e3104e8b53aa78d"' : 'data-target="#xs-components-links-module-SharedModule-03cfa0d12da3b7213e3104e8b53aa78d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-03cfa0d12da3b7213e3104e8b53aa78d"' :
                                            'id="xs-components-links-module-SharedModule-03cfa0d12da3b7213e3104e8b53aa78d"' }>
                                            <li class="link">
                                                <a href="components/SharedButtonComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SharedButtonComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SharedCardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SharedCardComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/CommentManagerService.html" data-type="entity-link">CommentManagerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DispatcherService.html" data-type="entity-link">DispatcherService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ImageSearchService.html" data-type="entity-link">ImageSearchService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NetService.html" data-type="entity-link">NetService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserManagerService.html" data-type="entity-link">UserManagerService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/MsAction.html" data-type="entity-link">MsAction</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MsComment.html" data-type="entity-link">MsComment</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MsFacade.html" data-type="entity-link">MsFacade</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MsImage.html" data-type="entity-link">MsImage</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MsManager.html" data-type="entity-link">MsManager</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MsUser.html" data-type="entity-link">MsUser</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});