// components/PageIllustration.js
const PageIllustration = () => (
    <div className="svg-background">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none" width="100%" height="100%">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#F28D9C', stopOpacity: 1 }} /> {/* Light Crimson */}
            <stop offset="50%" style={{ stopColor: '#D9535A', stopOpacity: 1 }} /> {/* Dark Crimson */}
            <stop offset="100%" style={{ stopColor: '#F24C61', stopOpacity: 1 }} /> {/* Darker Crimson */}
          </linearGradient>
        </defs>
  
        {/* Animated Circles */}
        <circle cx="20" cy="20" r="4" fill="url(#grad1)">
          <animate attributeName="cx" from="0" to="50" dur="3s" repeatCount="indefinite" keyTimes="0;0.5;1" values="0;50;100" />
          <animate attributeName="cy" from="0" to="50" dur="3s" repeatCount="indefinite" keyTimes="0;0.5;1" values="0;50;100" />
          <animateTransform attributeName="transform" type="rotate" from="0 20 20" to="360 20 20" dur="6s" repeatCount="indefinite"/>
        </circle>
  
        <circle cx="70" cy="30" r="3" fill="url(#grad1)">
          <animate attributeName="cx" from="70" to="30" dur="5s" repeatCount="indefinite" keyTimes="0;0.5;1" values="70;30;70" />
          <animate attributeName="cy" from="30" to="70" dur="5s" repeatCount="indefinite" keyTimes="0;0.5;1" values="30;70;30" />
          <animateTransform attributeName="transform" type="scale" from="1" to="1.5" dur="5s" repeatCount="indefinite"/>
        </circle>
  
        <circle cx="50" cy="60" r="5" fill="url(#grad1)">
          <animate attributeName="cx" from="50" to="100" dur="6s" repeatCount="indefinite" keyTimes="0;0.5;1" values="50;100;50" />
          <animate attributeName="cy" from="60" to="10" dur="6s" repeatCount="indefinite" keyTimes="0;0.5;1" values="60;10;60" />
          <animateTransform attributeName="transform" type="rotate" from="0 50 60" to="360 50 60" dur="7s" repeatCount="indefinite"/>
        </circle>
  
        <circle cx="40" cy="40" r="2" fill="url(#grad1)">
          <animate attributeName="cx" from="40" to="80" dur="4s" repeatCount="indefinite" keyTimes="0;0.5;1" values="40;80;40" />
          <animate attributeName="cy" from="40" to="80" dur="4s" repeatCount="indefinite" keyTimes="0;0.5;1" values="40;80;40" />
          <animateTransform attributeName="transform" type="scale" from="0.5" to="2" dur="4s" repeatCount="indefinite"/>
        </circle>
  
        <circle cx="80" cy="70" r="3" fill="url(#grad1)">
          <animate attributeName="cx" from="80" to="40" dur="6s" repeatCount="indefinite" keyTimes="0;0.5;1" values="80;40;80" />
          <animate attributeName="cy" from="70" to="20" dur="6s" repeatCount="indefinite" keyTimes="0;0.5;1" values="70;20;70" />
          <animateTransform attributeName="transform" type="rotate" from="0 80 70" to="360 80 70" dur="5s" repeatCount="indefinite"/>
        </circle>
      </svg>
  
      <style jsx>{`
        .svg-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1; /* Keep the background behind your content */
        }
      `}</style>
    </div>
  );
  
  export default PageIllustration;  