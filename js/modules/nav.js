// Nav custom layout---------------------------

let navItems = {
  linkOne: "Home",
  linkTwo: "Services",
  linkThree: "About",
  linkFour: "Contact",
};

const links = {
  one: "#home",
  two: "#",
  three: "#",
  four: "#",
};

const content = `
<div class="nav-container">
  <div class="logo">DNLP<span class="logo-dot">.</span></div>
  <ul class="nav-links">
    <li><a href="${links.one}" class="link">${navItems.linkOne}</a></li>
    <li><a href="${links.two}" class="link">${navItems.linkTwo}</a></li>
    <li><a href="${links.three}" class="link">${navItems.linkThree}</a></li>
    <li><a href="${links.four}" class="link">${navItems.linkFour}</a></li>
  </ul>
</div>
`;

export default content;
