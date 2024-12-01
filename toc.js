// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded affix "><li class="part-title">[en] Dogecoin Core</li><li class="chapter-item expanded "><a href="en/index.html"><strong aria-hidden="true">1.</strong> Readme</a></li><li class="chapter-item expanded affix "><li class="part-title">[en] Development</li><li class="chapter-item expanded "><a href="en/doc/Building-Dogecoin-1.14-for-Mac-removed.html"><strong aria-hidden="true">2.</strong> Building-dogecoin-1.14-for-mac-removed</a></li><li class="chapter-item expanded "><a href="en/doc/CONTRIBUTING-removed.html"><strong aria-hidden="true">3.</strong> Contributing-removed</a></li><li class="chapter-item expanded "><a href="en/doc/FAQ.html"><strong aria-hidden="true">4.</strong> Faq</a></li><li class="chapter-item expanded "><a href="en/doc/index.html"><strong aria-hidden="true">5.</strong> Readme</a></li><li class="chapter-item expanded "><a href="en/doc/README_osx.html"><strong aria-hidden="true">6.</strong> Readme_osx</a></li><li class="chapter-item expanded "><a href="en/doc/REST-interface.html"><strong aria-hidden="true">7.</strong> Rest-interface</a></li><li class="chapter-item expanded "><a href="en/doc/assets-attribution.html"><strong aria-hidden="true">8.</strong> Assets-attribution</a></li><li class="chapter-item expanded "><a href="en/doc/benchmarking.html"><strong aria-hidden="true">9.</strong> Benchmarking</a></li><li class="chapter-item expanded "><a href="en/doc/bips.html"><strong aria-hidden="true">10.</strong> Bips</a></li><li class="chapter-item expanded "><a href="en/doc/build-archlinux.html"><strong aria-hidden="true">11.</strong> Build-archlinux</a></li><li class="chapter-item expanded "><a href="en/doc/build-fedora.html"><strong aria-hidden="true">12.</strong> Build-fedora</a></li><li class="chapter-item expanded "><a href="en/doc/build-freebsd.html"><strong aria-hidden="true">13.</strong> Build-freebsd</a></li><li class="chapter-item expanded "><a href="en/doc/build-macos.html"><strong aria-hidden="true">14.</strong> Build-macos</a></li><li class="chapter-item expanded "><a href="en/doc/build-nixos.html"><strong aria-hidden="true">15.</strong> Build-nixos</a></li><li class="chapter-item expanded "><a href="en/doc/build-openbsd.html"><strong aria-hidden="true">16.</strong> Build-openbsd</a></li><li class="chapter-item expanded "><a href="en/doc/build-osx-removed.html"><strong aria-hidden="true">17.</strong> Build-osx-removed</a></li><li class="chapter-item expanded "><a href="en/doc/build-unix.html"><strong aria-hidden="true">18.</strong> Build-unix</a></li><li class="chapter-item expanded "><a href="en/doc/build-windows.html"><strong aria-hidden="true">19.</strong> Build-windows</a></li><li class="chapter-item expanded "><a href="en/doc/developer-notes.html"><strong aria-hidden="true">20.</strong> Developer-notes</a></li><li class="chapter-item expanded "><a href="en/doc/dnsseed-policy.html"><strong aria-hidden="true">21.</strong> Dnsseed-policy</a></li><li class="chapter-item expanded "><a href="en/doc/experiments.html"><strong aria-hidden="true">22.</strong> Experiments</a></li><li class="chapter-item expanded "><a href="en/doc/fee-recommendation.html"><strong aria-hidden="true">23.</strong> Fee-recommendation</a></li><li class="chapter-item expanded "><a href="en/doc/files.html"><strong aria-hidden="true">24.</strong> Files</a></li><li class="chapter-item expanded "><a href="en/doc/fuzzing.html"><strong aria-hidden="true">25.</strong> Fuzzing</a></li><li class="chapter-item expanded "><a href="en/doc/getting-started.html"><strong aria-hidden="true">26.</strong> Getting-started</a></li><li class="chapter-item expanded "><a href="en/doc/gitian-building.html"><strong aria-hidden="true">27.</strong> Gitian-building</a></li><li class="chapter-item expanded "><a href="en/doc/init.html"><strong aria-hidden="true">28.</strong> Init</a></li><li class="chapter-item expanded "><a href="en/doc/reduce-memory.html"><strong aria-hidden="true">29.</strong> Reduce-memory</a></li><li class="chapter-item expanded "><a href="en/doc/reduce-traffic.html"><strong aria-hidden="true">30.</strong> Reduce-traffic</a></li><li class="chapter-item expanded "><a href="en/doc/release-notes.html"><strong aria-hidden="true">31.</strong> Release-notes</a></li><li class="chapter-item expanded "><a href="en/doc/release-process.html"><strong aria-hidden="true">32.</strong> Release-process</a></li><li class="chapter-item expanded "><a href="en/doc/rpc-maturity.html"><strong aria-hidden="true">33.</strong> Rpc-maturity</a></li><li class="chapter-item expanded "><a href="en/doc/shared-libraries.html"><strong aria-hidden="true">34.</strong> Shared-libraries</a></li><li class="chapter-item expanded "><a href="en/doc/tor.html"><strong aria-hidden="true">35.</strong> Tor</a></li><li class="chapter-item expanded "><a href="en/doc/translation_process.html"><strong aria-hidden="true">36.</strong> Translation_process</a></li><li class="chapter-item expanded "><a href="en/doc/translation_strings_policy.html"><strong aria-hidden="true">37.</strong> Translation_strings_policy</a></li><li class="chapter-item expanded "><a href="en/doc/travis-ci.html"><strong aria-hidden="true">38.</strong> Travis-ci</a></li><li class="chapter-item expanded "><a href="en/doc/zmq.html"><strong aria-hidden="true">39.</strong> Zmq</a></li><li class="chapter-item expanded affix "><li class="part-title">[br] Dogecoin Core</li><li class="chapter-item expanded "><a href="br/index.html"><strong aria-hidden="true">40.</strong> Readme</a></li><li class="chapter-item expanded affix "><li class="part-title">[cn] Dogecoin Core</li><li class="chapter-item expanded "><a href="cn/index.html"><strong aria-hidden="true">41.</strong> Readme</a></li><li class="chapter-item expanded affix "><li class="part-title">[fr] Dogecoin Core</li><li class="chapter-item expanded "><a href="fr/index.html"><strong aria-hidden="true">42.</strong> Readme</a></li><li class="chapter-item expanded affix "><li class="part-title">[ir] Dogecoin Core</li><li class="chapter-item expanded "><a href="ir/index.html"><strong aria-hidden="true">43.</strong> Readme</a></li><li class="chapter-item expanded affix "><li class="part-title">[pt] Dogecoin Core</li><li class="chapter-item expanded "><a href="pt/index.html"><strong aria-hidden="true">44.</strong> Readme</a></li><li class="chapter-item expanded affix "><li class="part-title">[vn] Dogecoin Core</li><li class="chapter-item expanded "><a href="vn/index.html"><strong aria-hidden="true">45.</strong> Readme</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString();
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
