/**
 * ASCII Art Background for Hero Section
 * Two thematic elements: stock chart (left) and prediction market box (right)
 */

(function() {
    'use strict';

    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initAsciiBackground);
    } else {
        initAsciiBackground();
    }

    function initAsciiBackground() {
        const heroAsciiBg = document.getElementById('heroAsciiBg');
        if (!heroAsciiBg) return;

        // Stock price chart - left side
        // Each line must start at column 0 with consistent spacing
const stockChart = 
`      $                 o        
 152  |              o-' '-o     
      |            -'       '-o  
 144  |      o---o'            '-
      |    -'                    
 136  |  o'                      
      | '                        
 128  |o                         
      |                          
 120  +--------------------------
       J   F   M   A   M   J   J 
                 2026            `;

        // Prediction market box - right side (Kalshi-style)
const marketBox = 
`+-------------------------------+
|  Will GPT-5 be released       |
|  before July 2026?            |
+---------------+---------------+
|      YES      |      NO       |
+---------------+---------------+
|      67c      |      33c      |
|     (67%)     |     (33%)     |
+---------------+---------------+
|   Vol: 2.4M   |  Last: 68c    |
+-------------------------------+`;

        // Create left element (stock chart)
        const leftPre = document.createElement('pre');
        leftPre.textContent = stockChart;
        leftPre.style.left = '20%';
        leftPre.style.top = '55%';
        leftPre.style.transform = 'translateY(-45%)';
        leftPre.classList.add('ascii-element', 'ascii-left');
        heroAsciiBg.appendChild(leftPre);

        // Create right element (market box)
        const rightPre = document.createElement('pre');
        rightPre.textContent = marketBox;
        rightPre.style.right = '20%';
        rightPre.style.left = 'auto';
        rightPre.style.top = '55%';
        rightPre.style.transform = 'translateY(-45%)';
        rightPre.classList.add('ascii-element', 'ascii-right');
        heroAsciiBg.appendChild(rightPre);
    }
})();
