{
  /* <audio src="../../audio/Mingle Game Song.mp3" autoplay></audio> */
}
////////////////////////////////////////////  Timer Logic  ////////////////////////////////////////////
let timerInterval;
let duration = 1 * 60 * 1001;
// let duration = 1000;
const endTime = Date.now() + duration;
let remainingTime = localStorage.getItem("remainingTime") || duration;
function updateTimer() {
  // remainingTime = Math.max(0, endTime - Date.now());
  const minutes = Math.floor(remainingTime / (1000 * 60));
  let seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  if (remainingTime > 30000) $(".timer").eq(0).html(`${minutes} : ${seconds}`);
  if (remainingTime < 30000 && remainingTime > 29000) {
    $(".timer-container").html(`
      <audio src="../../audio/Mingle Game Song.mp3" autoplay></audio> 
      <div id="deadline" class="mb-4 fixed top-0 left-[50%]">
      <svg preserveAspectRatio="none" id="line" viewBox="0 0 581 158">
        <g id="fire">
          <rect
            id="mask-fire-black"
            fill="transparent"
            x="511"
            y="41"
            width="38"
            height="34"
          />
          <g>
            <defs>
              <rect id="mask_fire" x="511" y="41" width="38" height="34" />
            </defs>
            <clipPath id="mask-fire_1_">
              <use xlink:href="#mask_fire" overflow="visible" />
            </clipPath>
            <g id="group-fire" clip-path="url(#mask-fire_1_)">
              <path
                id="red-flame"
                fill="#B71342"
                d="M528.377,100.291c6.207,0,10.947-3.272,10.834-8.576 c-0.112-5.305-2.934-8.803-8.237-10.383c-5.306-1.581-3.838-7.9-0.79-9.707c-7.337,2.032-7.581,5.891-7.11,8.238 c0.789,3.951,7.56,4.402,5.077,9.48c-2.482,5.079-8.012,1.129-6.319-2.257c-2.843,2.233-4.78,6.681-2.259,9.703 C521.256,98.809,524.175,100.291,528.377,100.291z"
              />
              <path
                id="yellow-flame"
                opacity="0.71"
                fill="#F7B523"
                d="M528.837,100.291c4.197,0,5.108-1.854,5.974-5.417 c0.902-3.724-1.129-6.207-5.305-9.931c-2.396-2.137-1.581-4.176-0.565-6.32c-4.401,1.918-3.384,5.304-2.482,6.658 c1.511,2.267,2.099,2.364,0.42,5.8c-1.679,3.435-5.42,0.764-4.275-1.527c-1.921,1.512-2.373,4.04-1.528,6.563 C522.057,99.051,525.994,100.291,528.837,100.291z"
              />
              <path
                id="white-flame"
                opacity="0.81"
                fill="#FFFFFF"
                d="M529.461,100.291c-2.364,0-4.174-1.322-4.129-3.469 c0.04-2.145,1.117-3.56,3.141-4.198c2.022-0.638,1.463-3.195,0.302-3.925c2.798,0.821,2.89,2.382,2.711,3.332 c-0.301,1.597-2.883,1.779-1.938,3.834c0.912,1.975,3.286,0.938,2.409-0.913c1.086,0.903,1.826,2.701,0.864,3.924 C532.18,99.691,531.064,100.291,529.461,100.291z"
              />
            </g>
          </g>
        </g>
        <g id="progress-trail">
          <path
            fill="#FFFFFF"
            d="M491.979,83.878c1.215-0.73-0.62-5.404-3.229-11.044c-2.583-5.584-5.034-10.066-7.229-8.878
                                  c-2.854,1.544-0.192,6.286,2.979,11.628C487.667,80.917,490.667,84.667,491.979,83.878z"
          />
          <path
            fill="#FFFFFF"
            d="M571,76v-5h-23.608c0.476-9.951-4.642-13.25-4.642-13.25l-3.125,4c0,0,3.726,2.7,3.625,5.125
                                  c-0.071,1.714-2.711,3.18-4.962,4.125H517v5h10v24h-25v-5.666c0,0,0.839,0,2.839-0.667s6.172-3.667,4.005-6.333
                                  s-7.49,0.333-9.656,0.166s-6.479-1.5-8.146,1.917c-1.551,3.178,0.791,5.25,5.541,6.083l-0.065,4.5H16c-2.761,0-5,2.238-5,5v17
                                  c0,2.762,2.239,5,5,5h549c2.762,0,5-2.238,5-5v-17c0-2.762-2.238-5-5-5h-3V76H571z"
          />
          <path
            fill="#FFFFFF"
            d="M535,65.625c1.125,0.625,2.25-1.125,2.25-1.125l11.625-22.375c0,0,0.75-0.875-1.75-2.125
                                  s-3.375,0.25-3.375,0.25s-8.75,21.625-9.875,23.5S533.875,65,535,65.625z"
          />
        </g>
        <g>
          <defs>
            <path
              id="SVGID_1_"
              d="M484.5,75.584c-3.172-5.342-5.833-10.084-2.979-11.628c2.195-1.188,4.646,3.294,7.229,8.878
                                   c2.609,5.64,4.444,10.313,3.229,11.044C490.667,84.667,487.667,80.917,484.5,75.584z M571,76v-5h-23.608
                                   c0.476-9.951-4.642-13.25-4.642-13.25l-3.125,4c0,0,3.726,2.7,3.625,5.125c-0.071,1.714-2.711,3.18-4.962,4.125H517v5h10v24h-25
                                   v-5.666c0,0,0.839,0,2.839-0.667s6.172-3.667,4.005-6.333s-7.49,0.333-9.656,0.166s-6.479-1.5-8.146,1.917
                                   c-1.551,3.178,0.791,5.25,5.541,6.083l-0.065,4.5H16c-2.761,0-5,2.238-5,5v17c0,2.762,2.239,5,5,5h549c2.762,0,5-2.238,5-5v-17
                                   c0-2.762-2.238-5-5-5h-3V76H571z M535,65.625c1.125,0.625,2.25-1.125,2.25-1.125l11.625-22.375c0,0,0.75-0.875-1.75-2.125
                                   s-3.375,0.25-3.375,0.25s-8.75,21.625-9.875,23.5S533.875,65,535,65.625z"
            />
          </defs>
          <clipPath id="SVGID_2_">
            <use xlink:href="#SVGID_1_" overflow="visible" />
          </clipPath>
          <rect
            id="progress-time-fill"
            x="-100%"
            y="34"
            clip-path="url(#SVGID_2_)"
            fill="#551a67"
            width="586"
            height="103"
          />
        </g>

        <g id="death-group">
          <path
            id="death"
            fill="#551a67"
            d="M-46.25,40.416c-5.42-0.281-8.349,3.17-13.25,3.918c-5.716,0.871-10.583-0.918-10.583-0.918
                                             C-67.5,49-65.175,50.6-62.083,52c5.333,2.416,4.083,3.5,2.084,4.5c-16.5,4.833-15.417,27.917-15.417,27.917L-75.5,84.75
                                             c-1,12.25-20.25,18.75-20.25,18.75s39.447,13.471,46.25-4.25c3.583-9.333-1.553-16.869-1.667-22.75
                                             c-0.076-3.871,2.842-8.529,6.084-12.334c3.596-4.22,6.958-10.374,6.958-15.416C-38.125,43.186-39.833,40.75-46.25,40.416z
                                             M-40,51.959c-0.882,3.004-2.779,6.906-4.154,6.537s-0.939-4.32,0.112-7.704c0.82-2.64,2.672-5.96,3.959-5.583
                                             C-39.005,45.523-39.073,48.8-40,51.959z"
          />
          <path
            id="death-arm"
            fill="#551a67"
            d="M-53.375,75.25c0,0,9.375,2.25,11.25,0.25s2.313-2.342,3.375-2.791
                                                 c1.083-0.459,4.375-1.75,4.292-4.75c-0.101-3.627,0.271-4.594,1.333-5.043c1.083-0.457,2.75-1.666,2.75-1.666
                                                 s0.708-0.291,0.5-0.875s-0.791-2.125-1.583-2.959c-0.792-0.832-2.375-1.874-2.917-1.332c-0.542,0.541-7.875,7.166-7.875,7.166
                                                 s-2.667,2.791-3.417,0.125S-49.833,61-49.833,61s-3.417,1.416-3.417,1.541s-1.25,5.834-1.25,5.834l-0.583,5.833L-53.375,75.25z"
          />
          <path
            id="death-tool"
            fill="#551a67"
            d="M-20.996,26.839l-42.819,91.475l1.812,0.848l38.342-81.909c0,0,8.833,2.643,12.412,7.414
                                                  c5,6.668,4.75,14.084,4.75,14.084s4.354-7.732,0.083-17.666C-10,32.75-19.647,28.676-19.647,28.676l0.463-0.988L-20.996,26.839z"
          />
        </g>
        <path
          id="designer-body"
          fill="#FEFFFE"
          d="M514.75,100.334c0,0,1.25-16.834-6.75-16.5c-5.501,0.229-5.583,3-10.833,1.666
                                                   c-3.251-0.826-5.084-15.75-0.834-22c4.948-7.277,12.086-9.266,13.334-7.833c2.25,2.583-2,10.833-4.5,14.167
                                                   c-2.5,3.333-1.833,10.416,0.5,9.916s8.026-0.141,10,2.25c3.166,3.834,4.916,17.667,4.916,17.667l0.917,2.5l-4,0.167L514.75,100.334z
                                                   "
        />

        <circle
          id="designer-head"
          fill="#FEFFFE"
          cx="516.083"
          cy="53.25"
          r="6.083"
        />

        <g id="designer-arm-grop">
          <path
            id="designer-arm"
            fill="#FEFFFE"
            d="M505.875,64.875c0,0,5.875,7.5,13.042,6.791c6.419-0.635,11.833-2.791,13.458-4.041s2-3.5,0.25-3.875
                                                    s-11.375,5.125-16,3.25c-5.963-2.418-8.25-7.625-8.25-7.625l-2,1.125L505.875,64.875z"
          />
          <path
            id="designer-pen"
            fill="#FEFFFE"
            d="M525.75,59.084c0,0-0.423-0.262-0.969,0.088c-0.586,0.375-0.547,0.891-0.547,0.891l7.172,8.984l1.261,0.453
                                                    l-0.104-1.328L525.75,59.084z"
          />
        </g>
      </svg>

      
    </div>`);
    $("body").append(`<script src="../deadline loading/jquery.js"></script>
    <script src="../deadline loading/deadline-loading.js"></script>`);
  }
  if (remainingTime <= 60000 && remainingTime >= 30060) {
    $(".timer").eq(0).addClass("text-red-700");
  }
  if (remainingTime <= 60000 && remainingTime >= 59000) {
    console.log("🌲");
    $(".overlay-time").removeClass("hidden");
  }
  // if (remainingTime <= 30060 && remainingTime >= 30000) {
  //   console.log("👌", remainingTime);
  //   $(".timer").html(`<div id="deadline">
  //     <svg preserveAspectRatio="none" id="line" viewBox="0 0 581 158">
  //       <g id="fire">
  //         <rect
  //           id="mask-fire-black"
  //           fill="transparent"
  //           x="511"
  //           y="41"
  //           width="38"
  //           height="34"
  //         />
  //         <g>
  //           <defs>
  //             <rect id="mask_fire" x="511" y="41" width="38" height="34" />
  //           </defs>
  //           <clipPath id="mask-fire_1_">
  //             <use xlink:href="#mask_fire" overflow="visible" />
  //           </clipPath>
  //           <g id="group-fire" clip-path="url(#mask-fire_1_)">
  //             <path
  //               id="red-flame"
  //               fill="#B71342"
  //               d="M528.377,100.291c6.207,0,10.947-3.272,10.834-8.576 c-0.112-5.305-2.934-8.803-8.237-10.383c-5.306-1.581-3.838-7.9-0.79-9.707c-7.337,2.032-7.581,5.891-7.11,8.238 c0.789,3.951,7.56,4.402,5.077,9.48c-2.482,5.079-8.012,1.129-6.319-2.257c-2.843,2.233-4.78,6.681-2.259,9.703 C521.256,98.809,524.175,100.291,528.377,100.291z"
  //             />
  //             <path
  //               id="yellow-flame"
  //               opacity="0.71"
  //               fill="#F7B523"
  //               d="M528.837,100.291c4.197,0,5.108-1.854,5.974-5.417 c0.902-3.724-1.129-6.207-5.305-9.931c-2.396-2.137-1.581-4.176-0.565-6.32c-4.401,1.918-3.384,5.304-2.482,6.658 c1.511,2.267,2.099,2.364,0.42,5.8c-1.679,3.435-5.42,0.764-4.275-1.527c-1.921,1.512-2.373,4.04-1.528,6.563 C522.057,99.051,525.994,100.291,528.837,100.291z"
  //             />
  //             <path
  //               id="white-flame"
  //               opacity="0.81"
  //               fill="#FFFFFF"
  //               d="M529.461,100.291c-2.364,0-4.174-1.322-4.129-3.469 c0.04-2.145,1.117-3.56,3.141-4.198c2.022-0.638,1.463-3.195,0.302-3.925c2.798,0.821,2.89,2.382,2.711,3.332 c-0.301,1.597-2.883,1.779-1.938,3.834c0.912,1.975,3.286,0.938,2.409-0.913c1.086,0.903,1.826,2.701,0.864,3.924 C532.18,99.691,531.064,100.291,529.461,100.291z"
  //             />
  //           </g>
  //         </g>
  //       </g>
  //       <g id="progress-trail">
  //         <path
  //           fill="#FFFFFF"
  //           d="M491.979,83.878c1.215-0.73-0.62-5.404-3.229-11.044c-2.583-5.584-5.034-10.066-7.229-8.878
  //                                 c-2.854,1.544-0.192,6.286,2.979,11.628C487.667,80.917,490.667,84.667,491.979,83.878z"
  //         />
  //         <path
  //           fill="#FFFFFF"
  //           d="M571,76v-5h-23.608c0.476-9.951-4.642-13.25-4.642-13.25l-3.125,4c0,0,3.726,2.7,3.625,5.125
  //                                 c-0.071,1.714-2.711,3.18-4.962,4.125H517v5h10v24h-25v-5.666c0,0,0.839,0,2.839-0.667s6.172-3.667,4.005-6.333
  //                                 s-7.49,0.333-9.656,0.166s-6.479-1.5-8.146,1.917c-1.551,3.178,0.791,5.25,5.541,6.083l-0.065,4.5H16c-2.761,0-5,2.238-5,5v17
  //                                 c0,2.762,2.239,5,5,5h549c2.762,0,5-2.238,5-5v-17c0-2.762-2.238-5-5-5h-3V76H571z"
  //         />
  //         <path
  //           fill="#FFFFFF"
  //           d="M535,65.625c1.125,0.625,2.25-1.125,2.25-1.125l11.625-22.375c0,0,0.75-0.875-1.75-2.125
  //                                 s-3.375,0.25-3.375,0.25s-8.75,21.625-9.875,23.5S533.875,65,535,65.625z"
  //         />
  //       </g>
  //       <g>
  //         <defs>
  //           <path
  //             id="SVGID_1_"
  //             d="M484.5,75.584c-3.172-5.342-5.833-10.084-2.979-11.628c2.195-1.188,4.646,3.294,7.229,8.878
  //                                  c2.609,5.64,4.444,10.313,3.229,11.044C490.667,84.667,487.667,80.917,484.5,75.584z M571,76v-5h-23.608
  //                                  c0.476-9.951-4.642-13.25-4.642-13.25l-3.125,4c0,0,3.726,2.7,3.625,5.125c-0.071,1.714-2.711,3.18-4.962,4.125H517v5h10v24h-25
  //                                  v-5.666c0,0,0.839,0,2.839-0.667s6.172-3.667,4.005-6.333s-7.49,0.333-9.656,0.166s-6.479-1.5-8.146,1.917
  //                                  c-1.551,3.178,0.791,5.25,5.541,6.083l-0.065,4.5H16c-2.761,0-5,2.238-5,5v17c0,2.762,2.239,5,5,5h549c2.762,0,5-2.238,5-5v-17
  //                                  c0-2.762-2.238-5-5-5h-3V76H571z M535,65.625c1.125,0.625,2.25-1.125,2.25-1.125l11.625-22.375c0,0,0.75-0.875-1.75-2.125
  //                                  s-3.375,0.25-3.375,0.25s-8.75,21.625-9.875,23.5S533.875,65,535,65.625z"
  //           />
  //         </defs>
  //         <clipPath id="SVGID_2_">
  //           <use xlink:href="#SVGID_1_" overflow="visible" />
  //         </clipPath>
  //         <rect
  //           id="progress-time-fill"
  //           x="-100%"
  //           y="34"
  //           clip-path="url(#SVGID_2_)"
  //           fill="#551a67"
  //           width="586"
  //           height="103"
  //         />
  //       </g>

  //       <g id="death-group">
  //         <path
  //           id="death"
  //           fill="#551a67"
  //           d="M-46.25,40.416c-5.42-0.281-8.349,3.17-13.25,3.918c-5.716,0.871-10.583-0.918-10.583-0.918
  //                                            C-67.5,49-65.175,50.6-62.083,52c5.333,2.416,4.083,3.5,2.084,4.5c-16.5,4.833-15.417,27.917-15.417,27.917L-75.5,84.75
  //                                            c-1,12.25-20.25,18.75-20.25,18.75s39.447,13.471,46.25-4.25c3.583-9.333-1.553-16.869-1.667-22.75
  //                                            c-0.076-3.871,2.842-8.529,6.084-12.334c3.596-4.22,6.958-10.374,6.958-15.416C-38.125,43.186-39.833,40.75-46.25,40.416z
  //                                            M-40,51.959c-0.882,3.004-2.779,6.906-4.154,6.537s-0.939-4.32,0.112-7.704c0.82-2.64,2.672-5.96,3.959-5.583
  //                                            C-39.005,45.523-39.073,48.8-40,51.959z"
  //         />
  //         <path
  //           id="death-arm"
  //           fill="#551a67"
  //           d="M-53.375,75.25c0,0,9.375,2.25,11.25,0.25s2.313-2.342,3.375-2.791
  //                                                c1.083-0.459,4.375-1.75,4.292-4.75c-0.101-3.627,0.271-4.594,1.333-5.043c1.083-0.457,2.75-1.666,2.75-1.666
  //                                                s0.708-0.291,0.5-0.875s-0.791-2.125-1.583-2.959c-0.792-0.832-2.375-1.874-2.917-1.332c-0.542,0.541-7.875,7.166-7.875,7.166
  //                                                s-2.667,2.791-3.417,0.125S-49.833,61-49.833,61s-3.417,1.416-3.417,1.541s-1.25,5.834-1.25,5.834l-0.583,5.833L-53.375,75.25z"
  //         />
  //         <path
  //           id="death-tool"
  //           fill="#551a67"
  //           d="M-20.996,26.839l-42.819,91.475l1.812,0.848l38.342-81.909c0,0,8.833,2.643,12.412,7.414
  //                                                 c5,6.668,4.75,14.084,4.75,14.084s4.354-7.732,0.083-17.666C-10,32.75-19.647,28.676-19.647,28.676l0.463-0.988L-20.996,26.839z"
  //         />
  //       </g>
  //       <path
  //         id="designer-body"
  //         fill="#FEFFFE"
  //         d="M514.75,100.334c0,0,1.25-16.834-6.75-16.5c-5.501,0.229-5.583,3-10.833,1.666
  //                                                  c-3.251-0.826-5.084-15.75-0.834-22c4.948-7.277,12.086-9.266,13.334-7.833c2.25,2.583-2,10.833-4.5,14.167
  //                                                  c-2.5,3.333-1.833,10.416,0.5,9.916s8.026-0.141,10,2.25c3.166,3.834,4.916,17.667,4.916,17.667l0.917,2.5l-4,0.167L514.75,100.334z
  //                                                  "
  //       />

  //       <circle
  //         id="designer-head"
  //         fill="#FEFFFE"
  //         cx="516.083"
  //         cy="53.25"
  //         r="6.083"
  //       />

  //       <g id="designer-arm-grop">
  //         <path
  //           id="designer-arm"
  //           fill="#FEFFFE"
  //           d="M505.875,64.875c0,0,5.875,7.5,13.042,6.791c6.419-0.635,11.833-2.791,13.458-4.041s2-3.5,0.25-3.875
  //                                                   s-11.375,5.125-16,3.25c-5.963-2.418-8.25-7.625-8.25-7.625l-2,1.125L505.875,64.875z"
  //         />
  //         <path
  //           id="designer-pen"
  //           fill="#FEFFFE"
  //           d="M525.75,59.084c0,0-0.423-0.262-0.969,0.088c-0.586,0.375-0.547,0.891-0.547,0.891l7.172,8.984l1.261,0.453
  //                                                   l-0.104-1.328L525.75,59.084z"
  //         />
  //       </g>
  //     </svg>

  //     <div class="deadline-days">
  //       Deadline <span class="day">7</span> <span class="days">days</span>
  //     </div>
  //   </div>`);
  //   // $("head").append(`<link rel="stylesheet" href="deadline-loading.css" />`);
  //   // $("body").append(`<script src="deadline-loading.js"></script>`);
  // }

  //   $(".overlay-time").removeClass("hidden");
  // }
  // if (remainingTime <= 0) {
  //   clearInterval(timerInterval);
  //   $(".timer").eq(0).html("Time's up!");
  //   window.location.replace("./timeout.html");
  // }
}
// updateTimer();
// timerInterval = setInterval(updateTimer, 1000);

function startTimer() {
  updateTimer();
  const timerInterval = setInterval(() => {
    remainingTime -= 1000;
    if (remainingTime >= 0) {
      updateTimer();
      localStorage.setItem("remainingTime", remainingTime);
      // console.log(localStorage.getItem("remainingTime"));
    } else {
      clearInterval(timerInterval);
      localStorage.removeItem("remainingTime");
      console.log("time's up");
      $(".timer").eq(0).html("Time's up!");
      window.location.replace("./timeout.html");
    }
  }, 1000);
}

startTimer();

$(".ok").on("click", function () {
  $(".overlay-time").addClass("hidden");
});
////////////////////////////////////////////    display Questions   //////////////////////////////////////////
const Question = JSON.parse(localStorage.getItem("Question"));
// if (Question.length) {
//   let shuffledQuestions = [...Question].sort(() => Math.random() - 0.5);
//   let currentIndex = 0;
//   function displayQuestions(i) {
//     if (currentIndex == shuffledQuestions.length - 1) {
//       console.log(currentIndex, shuffledQuestions.length);
//       $(".right").addClass("disableBtn");
//       $(".left").removeClass("disableBtn");
//     }
//     $(".flag-icon").removeClass("fa-brands");
//     if (i === 0 || i) {
//       if (i == 0) {
//         $(".left").addClass("disableBtn");
//         $(".right").removeClass("disableBtn");
//       } else if (i == shuffledQuestions.length - 1) {
//         $(".right").addClass("disableBtn");
//         $(".left").removeClass("disableBtn");
//       } else {
//         $(".left").removeClass("disableBtn");
//         $(".right").removeClass("disableBtn");
//       }
//       $(".questionTitle")
//         .eq(0)
//         .html(`${i + 1} - ${shuffledQuestions[i].question}`);
//       if (shuffledQuestions[i].isFlagged) {
//         $(".flag-icon").addClass("fa-brands");
//       } else {
//         $(".flag-icon").removeClass("fa-brands");
//       }
//       //empty answers container
//       $("#answers").eq(0).empty();
//       //loop for question Answers to append //!test this case
//       shuffledQuestions[i].answer.forEach((ans, index) => {
//         // console.log(ans.ans, index);
//         $("#answers").eq(0)
//           .append(` <label class="answer"><div class="p-1 rounded-lg border-2">
//                  <input
//                     type="radio"
//                     name="${shuffledQuestions[currentIndex].question}"
//                     value="${ans.ans}"
//                     class="ans-input accent-primary hover:accent-primary"
//                     ${ans.isChecked === true ? "checked" : ""}
//                   />
//                   ${ans.ans}
//                 </div></label> `);
//       });
//     } else {
//       $(".questionTitle")
//         .eq(0)
//         .html(
//           `${currentIndex + 1} - ${shuffledQuestions[currentIndex].question}`
//         );
//       if (shuffledQuestions[currentIndex].isFlagged) {
//         $(".flag-icon").addClass("fa-brands");
//       } else {
//         $(".flag-icon").removeClass("fa-brands");
//       }
//       //empty answers container
//       $("#answers").eq(0).empty();
//       //loop for question Answers to append
//       shuffledQuestions[currentIndex].answer.forEach((ans, index) => {
//         console.log(ans);
//         $("#answers").eq(0)
//           .append(` <label class="answer"><div class="p-1 rounded-lg border-2">
//                    <input
//                       type="radio"
//                       name="${shuffledQuestions[currentIndex].question}"
//                       value="${ans.ans}"
//                       class="ans-input accent-primary hover:accent-primary"
//                       ${ans.isChecked === true ? "checked" : ""}
//                     />
//                     ${ans.ans}
//                   </label> `);
//       });
//     }
//   }
//   displayQuestions();
//   $(".left").addClass("disableBtn");
//   $(".right")
//     .eq(0)
//     .on("click", function () {
//       if (currentIndex < shuffledQuestions.length - 1) {
//         currentIndex++;
//         displayQuestions();
//         $(".left").removeClass("disableBtn");
//         if (currentIndex == shuffledQuestions.length - 1) {
//           $(".right").addClass("disableBtn");
//         }
//       }
//     });
//   $(".left")
//     .eq(0)
//     .on("click", function () {
//       if (currentIndex > 0) {
//         currentIndex--;
//         $(".left").removeClass("disableBtn");
//         displayQuestions();
//         $(".right").removeClass("disableBtn");
//         if (currentIndex == 0) {
//           $(".left").addClass("disableBtn");
//         }
//       }
//     });
// } else {
//   //change content of exam to no questions available;
//   window.location.replace("./startExam.html");
// }
let shuffledQuestions = [...Question].sort(() => Math.random() - 0.5);
let currentIndex = 0;
$(".left").addClass("disableBtn");
$(".right")
  .eq(0)
  .on("click", function () {
    if (currentIndex < shuffledQuestions.length - 1) {
      currentIndex++;
      displayQuestions();
      $(".left").removeClass("disableBtn");
      if (currentIndex == shuffledQuestions.length - 1) {
        $(".right").addClass("disableBtn");
      }
    }
  });
$(".left")
  .eq(0)
  .on("click", function () {
    if (currentIndex > 0) {
      currentIndex--;
      $(".left").removeClass("disableBtn");
      displayQuestions();
      $(".right").removeClass("disableBtn");
      if (currentIndex == 0) {
        $(".left").addClass("disableBtn");
      }
    }
  });

function displayQuestions(i) {
  if (currentIndex == shuffledQuestions.length - 1) {
    console.log(currentIndex, shuffledQuestions.length);
    $(".right").addClass("disableBtn");
    $(".left").removeClass("disableBtn");
  }
  $(".questionNumber").text(
    `${currentIndex + 1} of ${shuffledQuestions.length}`
  );
  $(".flag-icon").removeClass("fa-brands");
  if (i === 0 || i) {
    if (i == 0) {
      $(".left").addClass("disableBtn");
      $(".right").removeClass("disableBtn");
    } else if (i == shuffledQuestions.length - 1) {
      $(".right").addClass("disableBtn");
      $(".left").removeClass("disableBtn");
    } else {
      $(".left").removeClass("disableBtn");
      $(".right").removeClass("disableBtn");
    }
    $(".questionTitle")
      .eq(0)
      .html(`${i + 1} - ${shuffledQuestions[i].question}`);
    if (shuffledQuestions[i].isFlagged) {
      $(".flag-icon").addClass("fa-brands");
    } else {
      $(".flag-icon").removeClass("fa-brands");
    }
    //empty answers container
    $("#answers").eq(0).empty();
    //loop for question Answers to append //!test this case
    shuffledQuestions[i].answer.forEach((ans, index) => {
      // console.log(ans.ans, index);
      $("#answers").eq(0)
        .append(` <label class="answer"><div class="p-1 rounded-lg border-2">
                   <input
                      type="radio"
                      name="${shuffledQuestions[currentIndex].question}"
                      value="${ans.ans}"
                      class="ans-input accent-primary hover:accent-primary"
                      ${ans.isChecked === true ? "checked" : ""}
                    />
                    ${ans.ans}
                  </div></label> `);
    });
  } else {
    $(".questionTitle")
      .eq(0)
      .html(
        `${currentIndex + 1} - ${shuffledQuestions[currentIndex].question}`
      );
    if (shuffledQuestions[currentIndex].isFlagged) {
      $(".flag-icon").addClass("fa-brands");
    } else {
      $(".flag-icon").removeClass("fa-brands");
    }
    //empty answers container
    $("#answers").eq(0).empty();
    //loop for question Answers to append
    shuffledQuestions[currentIndex].answer.forEach((ans, index) => {
      // console.log(ans);
      $("#answers").eq(0)
        .append(` <label class="answer"><div class="p-1 rounded-lg border-2">
                     <input
                        type="radio"
                        name="${shuffledQuestions[currentIndex].question}"
                        value="${ans.ans}"
                        class="ans-input accent-primary hover:accent-primary"
                        ${ans.isChecked === true ? "checked" : ""}
                      />
                      ${ans.ans}
                    </label> `);
    });
  }
}
displayQuestions();
// if (Question.length === 0) {
//   console.log("length = 0");
//   window.location.replace("./empty.html");
// } else {
// }
////////////////////////////////  flag    ////////////////////////////////
let flaggedQArr = [];
$(".flag").on("click", function () {
  $(".flag-icon").toggleClass("fa-brands");
  if ($(".flag-icon").hasClass("fa-brands")) {
    flaggedQArr.push(shuffledQuestions[currentIndex].question);
    addToMarkedQ(flaggedQArr);
    shuffledQuestions[currentIndex].isFlagged = true;
  } else {
    $(".flag-text").html("Flag");
    let flagText = $(this).siblings().eq(0).html();
    flaggedQArr = flaggedQArr.filter((q, i) => {
      return q !== flagText.slice(4, flagText.length);
    });
    shuffledQuestions[currentIndex].isFlagged = false;

    addToMarkedQ(flaggedQArr);
  }
  // console.log(flaggedQArr);
});

function truncateText(text, maxLength) {
  // console.log(text);
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + "...";
  }
  return text;
}
function addToMarkedQ(Arr) {
  $(".flagged").html("");
  Arr.forEach((Q, i) => {
    $(".flagged").append(`
      <div class="flex justify-between items-center cursor-pointer">
      <p class="questionTitleFlagged">${truncateText(Q, 30)}</p>
      <span class=""><i class="fa-solid fa-trash trash"></i></span>
      </div>
   `);
  });
}
////////////////////////////////  clicking title   //////////////////////////////////

$("#markedQ").on("click", ".questionTitleFlagged", function () {
  let flagText = $(this).eq(0).html();
  shuffledQuestions.forEach((q, i) => {
    // console.log(q.question, flagText);
    if (truncateText(q.question, 30) === flagText) {
      currentIndex = i;
      displayQuestions(i);
    }
  });
});
////////////////////////////////  clicking Trash Icon   //////////////////////////////////
$("#markedQ").on("click", ".trash", function () {
  let flagText = $(this).parent().siblings().eq(0).html();
  console.log(flagText);
  flaggedQArr = flaggedQArr.filter((q) => {
    return truncateText(q, 30) !== flagText;
  });
  shuffledQuestions.forEach((q) => {
    if (truncateText(q.question, 30) === flagText) {
      q.isFlagged = false;
    }
  });
  addToMarkedQ(flaggedQArr);
  if (truncateText(shuffledQuestions[currentIndex].question, 30) === flagText) {
    $(".flag-icon").removeClass("fa-brands");
  }
});

////////////////////////////////  save answers   //////////////////////////////////
const studentAnswers = {}; //!set answer selected in ui
$("#answers").on("change", ".ans-input", function (e) {
  // console.log(shuffledQuestions);
  Question.forEach((Q, i) => {
    // i => questionIndexInOriginalObj;
    if (Q.question === e.target.name) {
      studentAnswers[i] = $(e.target).val(); ////////////////////////////////
      $(e.target).attr("checked");

      shuffledQuestions.forEach((ShufQ, i) => {
        if (ShufQ.question === Q.question) {
          ShufQ.answer.forEach((ans, i) => {
            // console.log(ans.ans, $(e.target).val());
            if (ans.ans === $(e.target).val()) {
              ans.isChecked = true;
            } else {
              ans.isChecked = false;
            }
          });
        }
      });
    }
  });
  console.log(shuffledQuestions);
  console.log(studentAnswers);
});

////////////////////////////////  save answers in localStorage   //////////////////////////////////
let grades = [];
$(".submit").on("click", function () {
  console.log("submit");
  localStorage.removeItem("remainingTime");
  localStorage.setItem("studentAnswers", JSON.stringify(studentAnswers));
  console.log(`your grade is ${calcGrades()} out of ${Question.length}`); //!grades 3la ma-tofrag
  let currentUser = JSON.parse(localStorage.getItem("currentUser"));
  let currentUserGrade = calcGrades();
  grades.push({ userEmail: `${currentUser.email}`, grade: currentUserGrade });
  localStorage.setItem("AllUsersGrades", JSON.stringify(grades));
  localStorage.setItem("grade", JSON.stringify(currentUserGrade));
  let grade = JSON.parse(localStorage.getItem("grade"));
  if (currentUserGrade > Question.length / 2) {
    console.log("success");
    window.location.replace("./success.html");
  } else {
    console.log("fail");
    window.location.replace("./fail.html");
  }
});
////////////////////////////////  calc grades   //////////////////////////////////
function calcGrades() {
  let grade = 0;
  const correctAnswers = getCorrectAnswers();
  const studentAnswers = JSON.parse(localStorage.getItem("studentAnswers"));

  console.log(correctAnswers);
  correctAnswers.forEach((ans, i) => {
    if (ans === studentAnswers[i]) {
      grade++;
    }
  });
  return grade;
}
function getCorrectAnswers() {
  let correctAnswer = [];
  Question.forEach((ques) => {
    correctAnswer.push(ques.answer.filter((ans) => ans.isTrue)[0].ans);
    // console.log(correctAnswer);
  });
  return correctAnswer;
}
