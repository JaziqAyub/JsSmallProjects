document.addEventListener('DOMContentLoaded', function () {
    const accordionContainer = document.querySelector('.accordion');
    const storageKey = 'myAccordionState'; 
  
    const savedState = localStorage.getItem(storageKey);
    if (savedState) {
      accordionContainer.innerHTML = savedState;
      console.log('Accordion state restored.');
    } else {
      console.log('No saved state found.');
    }
  
    function saveAccordionState() {
      localStorage.setItem(storageKey, accordionContainer.innerHTML);
      console.log('Accordion state saved.');
    }
  
    accordionContainer.addEventListener('click', function (event) {
      if (event.target.closest('.delete-btn')) {
        const accordionItem = event.target.closest('.accordion-item');
        accordionItem.remove();
        saveAccordionState();
        return;
      }
  
      const accordionHead = event.target.closest('.accordion-head');
      if (accordionHead) {
        const accordionItem = accordionHead.closest('.accordion-item');
        const accordionText = accordionItem.querySelector('.accordion-text');
        const isCtrlPressed = event.ctrlKey;
  
        if (accordionText.classList.contains('active')) {
          accordionText.classList.remove('active');
          saveAccordionState();
          return;
        }
  
        if (!isCtrlPressed) {
          document.querySelectorAll('.accordion-text.active').forEach((activeText) => {
            activeText.classList.remove('active');
          });
        }
        accordionText.classList.add('active');
        saveAccordionState();
      }
    });
  
    const addSectionBtn = document.getElementById('addSection');
    addSectionBtn.addEventListener('click', function () {
      const newItem = document.createElement('li');
      newItem.classList.add('accordion-item');
      newItem.innerHTML = `
        <div class="accordion-head">
          <h3 class="accordion-title">New Section</h3>
          <i class="fa-solid fa-arrow-down"></i>
          <button class="delete-btn">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
        <div class="accordion-text">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
        </div>
      `;
      accordionContainer.appendChild(newItem);
      saveAccordionState();
    });
  });
  