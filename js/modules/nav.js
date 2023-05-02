// Nav custom layout---------------------------

let navItems = {
  linkOne: "Services",
  linkTwo: "About",
  linkThree: "Contact",
};

const links = {
  one: "#services",
  two: "#about",
  three: "#contact",
};

const content = `
<div class="nav-container">
  <ul class="nav-links">
    <li><a href="${links.one}" class="link">${navItems.linkOne}</a></li>
    <li><a href="${links.two}" class="link">${navItems.linkTwo}</a></li>
    <li><a href="${links.three}" class="link">${navItems.linkThree}</a></li>
  </ul>
</div>
<div class="burger">
      <span class="top"></span>
      <span class="bottom"></span>
  </div>
<div class="hidden-nav">
    <ul class="nav-links-h">
      <li><a href="${links.one}" class="link">${navItems.linkOne}</a></li>
      <li><a href="${links.two}" class="link">${navItems.linkTwo}</a></li>
      <li><a href="${links.three}" class="link">${navItems.linkThree}</a></li>
    </ul>
  </div>
`;

export default content;
