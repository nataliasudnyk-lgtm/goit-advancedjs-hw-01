import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{S as d}from"./assets/vendor-CgTBfC_f.js";const e="/goit-advancedjs-hw-01/assets/image-1-C6i9rITG.png",i="/goit-advancedjs-hw-01/assets/image-2-CooblJ2A.png",a="/goit-advancedjs-hw-01/assets/image-3-e0oakKww.png",n="/goit-advancedjs-hw-01/assets/image-4-D_UQfpSO.png",s="/goit-advancedjs-hw-01/assets/image-5-DysELS0u.png",o="/goit-advancedjs-hw-01/assets/image-6-BWNhOHSf.png",t="/goit-advancedjs-hw-01/assets/image-7-Dbr4hB7s.png",g="/goit-advancedjs-hw-01/assets/image-8-BOz-7ABw.png",r="/goit-advancedjs-hw-01/assets/image-9-Ck3X3Df9.png",m=[{preview:e,original:e,description:"Teamwork and Planning"},{preview:i,original:i,description:"Creative Idea"},{preview:a,original:a,description:"Design and Development"},{preview:n,original:n,description:"Modern Meeting Room"},{preview:s,original:s,description:"Creative Workspace"},{preview:o,original:o,description:"Open Office"},{preview:t,original:t,description:"Laptop and Coffee"},{preview:g,original:g,description:"Working on a Laptop"},{preview:r,original:r,description:"Business Presentation"}],w=document.querySelector(".gallery"),v=m.map(({preview:p,original:c,description:l})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${c}">
          <img
            class="gallery-image"
            src="${p}"
            alt="${l}"
          />
        </a>
      </li>
    `).join("");w.insertAdjacentHTML("beforeend",v);new d(".gallery a",{captions:!0,captionSelector:"img",captionType:"attr",captionsData:"alt",captionPosition:"bottom",captionDelay:250});
//# sourceMappingURL=1-gallery.js.map
