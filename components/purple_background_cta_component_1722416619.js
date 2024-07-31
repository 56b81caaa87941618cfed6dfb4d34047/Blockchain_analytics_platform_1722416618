/* Summary: The section has a blurred radial gradient background and a call-to-action (CTA) content block.
It is centered on the page and includes a gradient-based title, a subtitle, a paragraph of text, and a button with a gradient background.
*/

Vue.component("purple_background_cta_component_1722416619", {
    template: `
    <section id="cta-section-container">
        <nav class="bg-gradient-to-r from-pink-600 to-purple-800 p-4">
            <div class="max-w-6xl mx-auto flex justify-between items-center">
                <div class="text-white font-bold text-xl">Logo</div>
                <div>
                    <a href="#" class="text-pink-200 mx-4 hover:text-white transition duration-300">Home</a>
                    <a href="#" class="text-pink-200 mx-4 hover:text-white transition duration-300">About</a>
                    <a href="#" class="text-pink-200 mx-4 hover:text-white transition duration-300">Contact</a>
                </div>
            </div>
        </nav>
        <div id="section-container" class="max-w-6xl mx-auto px-4 sm:px-6 bg-gradient-to-br from-purple-900 to-pink-800">
            <div id="content-container" class="relative px-8 py-12 md:py-20 rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-r from-purple-800 via-pink-700 to-purple-800">
                <!-- Radial gradient -->
                <div id="radial-gradient" class="absolute flex items-center justify-center top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/3 aspect-square" aria-hidden="true">
                    <div id="radial-gradient-outer" class="bg-pink-500 absolute inset-0 translate-z-0 rounded-full blur-120 opacity-70"></div>
                    <div id="radial-gradient-inner" class="absolute w-1/4 h-1/4 translate-z-0 rounded-full blur-40 bg-purple-400">
                    </div>
                </div>
                <!-- Blurred shape -->
                <div id="blurred-shape" class="absolute bottom-0 translate-y-1/2 left-0 blur-2xl opacity-50 pointer-events-none -z-10" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
                        <defs><linearGradient id="bs5-a" x1="19.609%" x2="50%" y1="14.544%" y2="100%"><stop offset="0%" stop-color="#FF69B4" /><stop offset="100%" stop-color="#9370DB" stop-opacity="0" /></linearGradient></defs>
                        <path fill="url(#bs5-a)" fill-rule="evenodd" d="m0 0 461 369-284 58z" transform="matrix(1 0 0 -1 0 427)" />
                    </svg>
                </div>
                <!-- Content -->
                <div id="content" class="max-w-3xl mx-auto text-center">
                    <div id="content-subtitle" class="flex"><div id="content-subtitle-text" class="flex-1 font-medium bg-clip-text pb-3 text-transparent bg-gradient-to-r from-pink-300 to-purple-300">Explore the Cosmic Realm of Decentralized Data</div></div>
                    <div class="flex" id="content-title-container"><h2 id="content-title" class="flex-1 h2 bg-clip-text pb-4 bg-gradient-to-r from-pink-200 via-purple-300 to-pink-200 text-4xl font-bold"> Celestial Blockchain Data Analysis</h2></div>
                    <div class="flex" id="content-body-container"><p id="content-body" class="flex-1 text-lg mb-8 text-pink-200">Embark on an interstellar journey through our cutting-edge blockchain analytics platform. Uncover ethereal insights from the cosmic tapestry of blockchain data to navigate the future of decentralized realms.</p></div>
                    <a id="content-cta-button" href="#0" class="btn transition duration-300 ease-in-out group text-purple-900 bg-gradient-to-r from-pink-300 via-purple-200 to-pink-300 hover:from-pink-400 hover:to-purple-300 px-6 py-3 rounded-full shadow-lg">Begin Your Cosmic Journey <span id="content-cta-arrow" class="tracking-normal group-hover:translate-x-1 transition-transform duration-300 ease-in-out ml-2 text-purple-700">→</span></a>
                </div>
            </div>
        </div>
    </section>`,
        data() {
            return {
                expanded: false, 
                tab: null,
            };
        },
    });
                    