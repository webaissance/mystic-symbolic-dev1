/* 2021-03-15 Dave Weaver, @webaissance - based on waves-page.tsx */
import React, { useState } from "react";
import { Page } from "../page";
import { ColorWidget } from "../color-widget";

const Cloud: React.FC<{
  stroke: string;
  fill: string;
}> = ({ stroke, fill}) => (
  <>
    {/* Generator: Moho 13.0.3 build 635 */}

<path  fill={fill} fillRule="evenodd" stroke={stroke} d="M 640.000 163.497 C 911.071 163.497 1129.745 382.171 1129.745 653.241 C 1129.745 788.776 1075.076 911.212 986.524 999.765 C 897.971 1088.317 775.535 1142.986 640.000 1142.986 C 368.930 1142.986 150.255 924.312 150.255 653.241 C 150.255 382.171 368.930 163.497 640.000 163.497 Z"/>
<path  fill={stroke} d="M 1151.689 653.241 C 1151.212 793.326 1093.232 923.537 1002.040 1015.282 L 971.007 984.248 C 1056.920 898.888 1108.278 784.227 1107.801 653.241 L 1151.689 653.241 Z"/>
<path  fill={stroke} d="M 1002.040 1015.282 C 910.296 1106.473 780.085 1164.453 640.000 1164.930 L 640.000 1121.042 C 770.986 1121.519 885.647 1070.161 971.007 984.248 L 1002.040 1015.282 Z"/>
<path  fill={stroke} stroke={stroke} strokeWidth="1" strokeLinecap="butt" strokeLinejoin="round" d="M 1002.040 1015.282 L 971.007 984.248 "/>
<path  fill={stroke} d="M 640.000 1164.930 C 359.983 1163.024 130.218 933.258 128.311 653.241 L 172.199 653.241 C 170.293 915.365 377.876 1122.949 640.000 1121.042 L 640.000 1164.930 Z"/>
<path  fill={stroke} stroke={stroke} strokeWidth="1" strokeLinecap="butt" strokeLinejoin="round" d="M 640.000 1164.930 L 640.000 1121.042 "/>
<path  fill={stroke} d="M 128.311 653.241 C 130.218 373.224 359.983 143.459 640.000 141.552 L 640.000 185.441 C 377.876 183.534 170.293 391.118 172.199 653.241 L 128.311 653.241 Z"/>
<path  fill={stroke} stroke={stroke} strokeWidth="1" strokeLinecap="butt" strokeLinejoin="round" d="M 128.311 653.241 L 172.199 653.241 "/>
<path  fill={stroke} d="M 640.000 141.552 C 920.017 143.459 1149.782 373.224 1151.689 653.241 L 1107.801 653.241 C 1109.707 391.118 902.124 183.534 640.000 185.441 L 640.000 141.552 Z"/>
<path  fill={stroke} stroke={stroke} strokeWidth="1" strokeLinecap="butt" strokeLinejoin="round" d="M 640.000 141.552 L 640.000 185.441 "/>
<path  fill={stroke} d="M 1029.173 964.593 C 1017.530 982.050 1013.421 1002.575 1002.825 1014.455 L 970.222 985.074 C 983.482 970.483 1005.304 971.032 1015.442 955.521 L 1029.173 964.593 Z"/>
<path  fill={stroke} stroke={stroke} strokeWidth="1" strokeLinecap="butt" strokeLinejoin="round" d="M 1029.173 964.593 L 1015.442 955.521 "/>
<path  fill={stroke} d="M 1118.264 615.463 C 1131.151 769.566 1107.621 845.780 1029.173 964.593 L 1015.442 955.521 C 1093.063 838.104 1114.708 768.858 1101.863 616.842 L 1118.264 615.463 Z"/>
<path  fill={stroke} stroke={stroke} strokeWidth="1" strokeLinecap="butt" strokeLinejoin="round" d="M 1118.264 615.463 L 1101.863 616.842 "/>
<path  fill={stroke} d="M 983.194 349.670 C 1056.683 427.958 1108.507 502.112 1118.264 615.463 L 1101.863 616.842 C 1092.884 507.287 1042.644 439.676 969.863 362.187 L 983.194 349.670 Z"/>
<path  fill={stroke} stroke={stroke} strokeWidth="1" strokeLinecap="butt" strokeLinejoin="round" d="M 983.194 349.670 L 969.863 362.187 "/>
<path  fill={stroke} d="M 804.962 239.576 C 875.699 259.719 932.588 295.977 983.194 349.670 L 969.863 362.187 C 921.636 310.621 863.629 292.299 795.471 272.999 L 804.962 239.576 Z"/>
<path  fill={stroke} stroke={stroke} strokeWidth="1" strokeLinecap="butt" strokeLinejoin="round" d="M 804.962 239.576 L 795.471 272.999 "/>
<path  fill={stroke} d="M 596.331 226.861 C 668.532 212.328 734.662 219.717 804.962 239.576 L 795.471 272.999 C 728.829 253.969 672.376 256.048 605.073 269.869 L 596.331 226.861 Z"/>
<path  fill={stroke} stroke={stroke} strokeWidth="1" strokeLinecap="butt" strokeLinejoin="round" d="M 596.331 226.861 L 605.073 269.869 "/>
<path  fill={stroke} d="M 401.936 318.969 C 459.533 269.729 522.961 241.881 596.331 226.861 L 605.073 269.869 C 535.879 283.825 483.265 306.647 430.548 352.249 L 401.936 318.969 Z"/>
<path  fill={stroke} stroke={stroke} strokeWidth="1" strokeLinecap="butt" strokeLinejoin="round" d="M 401.936 318.969 L 430.548 352.249 "/>
<path  fill={stroke} d="M 282.310 496.673 C 305.729 425.308 345.344 367.833 401.936 318.969 L 430.548 352.249 C 377.732 397.450 345.248 444.397 324.047 510.245 L 282.310 496.673 Z"/>
<path  fill={stroke} stroke={stroke} strokeWidth="1" strokeLinecap="butt" strokeLinejoin="round" d="M 282.310 496.673 L 324.047 510.245 "/>
<path  fill={stroke} d="M 274.551 707.298 C 256.505 635.708 259.739 566.641 282.310 496.673 L 324.047 510.245 C 302.843 574.896 300.126 630.876 317.076 696.448 L 274.551 707.298 Z"/>
<path  fill={stroke} stroke={stroke} strokeWidth="1" strokeLinecap="butt" strokeLinejoin="round" d="M 274.551 707.298 L 317.076 696.448 "/>
<path  fill={stroke} d="M 379.270 883.889 C 326.461 835.184 292.420 776.589 274.551 707.298 L 317.076 696.448 C 333.185 760.330 360.414 807.374 408.925 851.535 L 379.270 883.889 Z"/>
<path  fill={stroke} stroke={stroke} strokeWidth="1" strokeLinecap="butt" strokeLinejoin="round" d="M 379.270 883.889 L 408.925 851.535 "/>
<path  fill={stroke} d="M 557.593 970.053 C 489.198 959.416 430.241 930.341 379.270 883.889 L 408.925 851.535 C 455.329 894.331 502.002 917.437 564.193 926.664 L 557.593 970.053 Z"/>
<path  fill={stroke} stroke={stroke} strokeWidth="1" strokeLinecap="butt" strokeLinejoin="round" d="M 557.593 970.053 L 564.193 926.664 "/>
<path  fill={stroke} d="M 744.820 942.592 C 685.215 971.035 622.692 979.750 557.593 970.053 L 564.193 926.664 C 623.335 935.867 672.160 929.134 725.778 903.050 L 744.820 942.592 Z"/>
<path  fill={stroke} stroke={stroke} strokeWidth="1" strokeLinecap="butt" strokeLinejoin="round" d="M 744.820 942.592 L 725.778 903.050 "/>
<path  fill={stroke} d="M 876.013 820.686 C 844.995 874.835 800.773 915.413 744.820 942.592 L 725.778 903.050 C 776.455 878.878 810.432 847.787 837.847 799.017 L 876.013 820.686 Z"/>
<path  fill={stroke} stroke={stroke} strokeWidth="1" strokeLinecap="butt" strokeLinejoin="round" d="M 876.013 820.686 L 837.847 799.017 "/>
<path  fill={stroke} d="M 911.765 656.672 C 916.901 714.832 904.566 769.960 876.013 820.686 L 837.847 799.017 C 863.754 753.819 873.081 712.389 868.064 660.712 L 911.765 656.672 Z"/>
<path  fill={stroke} stroke={stroke} strokeWidth="1" strokeLinecap="butt" strokeLinejoin="round" d="M 911.765 656.672 L 868.064 660.712 "/>
<path  fill={stroke} d="M 851.911 512.820 C 886.598 554.305 906.587 602.998 911.765 656.672 L 868.064 660.712 C 863.880 613.110 849.261 577.373 818.365 541.119 L 851.911 512.820 Z"/>
<path  fill={stroke} stroke={stroke} strokeWidth="1" strokeLinecap="butt" strokeLinejoin="round" d="M 851.911 512.820 L 818.365 541.119 "/>
<path  fill={stroke} d="M 731.302 435.695 C 779.083 448.860 819.873 475.177 851.911 512.820 L 818.365 541.119 C 790.609 507.884 761.578 489.105 719.844 478.060 L 731.302 435.695 Z"/>
<path  fill={stroke} stroke={stroke} strokeWidth="1" strokeLinecap="butt" strokeLinejoin="round" d="M 731.302 435.695 L 719.844 478.060 "/>
<path  fill={stroke} d="M 601.216 440.188 C 643.703 425.575 687.985 424.199 731.302 435.695 L 719.844 478.060 C 682.513 467.744 652.079 468.657 615.701 481.617 L 601.216 440.188 Z"/>
<path  fill={stroke} stroke={stroke} strokeWidth="1" strokeLinecap="butt" strokeLinejoin="round" d="M 601.216 440.188 L 615.701 481.617 "/>
<path  fill={stroke} d="M 506.721 509.272 C 531.004 477.157 563.368 453.640 601.216 440.188 L 615.701 481.617 C 583.393 492.693 562.088 508.139 541.873 535.550 L 506.721 509.272 Z"/>
<path  fill={stroke} stroke={stroke} strokeWidth="1" strokeLinecap="butt" strokeLinejoin="round" d="M 506.721 509.272 L 541.873 535.550 "/>
<path  fill={stroke} d="M 470.852 606.958 C 473.186 571.391 485.590 537.874 506.721 509.272 L 541.873 535.550 C 523.960 559.178 516.212 580.047 514.662 609.573 L 470.852 606.958 Z"/>
<path  fill={stroke} stroke={stroke} strokeWidth="1" strokeLinecap="butt" strokeLinejoin="round" d="M 470.852 606.958 L 514.662 609.573 "/>
<path  fill={stroke} d="M 491.188 696.072 C 476.146 668.793 469.191 637.989 470.852 606.958 L 514.662 609.573 C 512.964 634.812 516.987 652.725 529.482 674.632 L 491.188 696.072 Z"/>
<path  fill={stroke} stroke={stroke} strokeWidth="1" strokeLinecap="butt" strokeLinejoin="round" d="M 491.188 696.072 L 529.482 674.632 "/>
<path  fill={stroke} d="M 547.367 752.025 C 523.943 738.879 504.429 719.352 491.188 696.072 L 529.482 674.632 C 539.662 693.183 550.025 703.582 568.574 713.601 L 547.367 752.025 Z"/>
<path  fill={stroke} stroke={stroke} strokeWidth="1" strokeLinecap="butt" strokeLinejoin="round" d="M 547.367 752.025 L 568.574 713.601 "/>
<path  fill={stroke} d="M 613.412 767.831 C 590.582 768.490 567.366 762.869 547.367 752.025 L 568.574 713.601 C 583.642 722.111 594.601 724.787 611.797 723.973 L 613.412 767.831 Z"/>
<path  fill={stroke} stroke={stroke} strokeWidth="1" strokeLinecap="butt" strokeLinejoin="round" d="M 613.412 767.831 L 611.797 723.973 "/>
<path  fill={stroke} d="M 668.315 750.952 C 652.024 761.021 632.427 766.973 613.412 767.831 L 611.797 723.973 C 625.579 723.623 633.436 721.264 644.907 713.828 L 668.315 750.952 Z"/>
<path  fill={stroke} stroke={stroke} strokeWidth="1" strokeLinecap="butt" strokeLinejoin="round" d="M 668.315 750.952 L 644.907 713.828 "/>
<path  fill={stroke} d="M 701.219 715.956 C 693.514 729.809 681.510 742.460 668.315 750.952 L 644.907 713.828 C 653.991 708.272 657.787 704.320 662.644 695.024 L 701.219 715.956 Z"/>
<path  fill={stroke} stroke={stroke} strokeWidth="1" strokeLinecap="butt" strokeLinejoin="round" d="M 701.219 715.956 L 662.644 695.024 "/>
<path  fill={stroke} d="M 711.097 677.376 C 710.946 690.356 707.189 704.673 701.219 715.956 L 662.644 695.024 C 666.539 688.126 667.373 685.109 667.209 677.404 L 711.097 677.376 Z"/>
<path  fill={stroke} stroke={stroke} strokeWidth="1" strokeLinecap="butt" strokeLinejoin="round" d="M 711.097 677.376 L 667.209 677.404 "/>
<path  fill={stroke} d="M 703.248 645.445 C 708.051 654.846 710.966 667.088 711.097 677.376 L 667.209 677.404 C 667.330 671.783 667.104 670.641 664.462 665.983 L 703.248 645.445 Z"/>
<path  fill={stroke} stroke={stroke} strokeWidth="1" strokeLinecap="butt" strokeLinejoin="round" d="M 703.248 645.445 L 664.462 665.983 "/>
<path  fill={stroke} d="M 685.280 625.043 C 692.203 630.049 699.263 638.173 703.248 645.445 L 664.462 665.983 C 662.821 662.630 663.115 662.913 660.176 661.042 L 685.280 625.043 Z"/>
<path  fill={stroke} stroke={stroke} strokeWidth="1" strokeLinecap="butt" strokeLinejoin="round" d="M 685.280 625.043 L 660.176 661.042 "/>
<path  fill={stroke} d="M 664.349 616.658 C 671.092 617.817 679.664 621.270 685.280 625.043 L 660.176 661.042 C 658.422 659.675 659.852 660.241 657.713 660.042 L 664.349 616.658 Z"/>
<path  fill={stroke} stroke={stroke} strokeWidth="1" strokeLinecap="butt" strokeLinejoin="round" d="M 664.349 616.658 L 657.713 660.042 "/>
<path  fill={stroke} d="M 645.783 617.816 C 650.931 616.475 658.767 615.925 664.349 616.658 L 657.713 660.042 C 656.685 659.764 658.854 659.642 657.561 660.095 L 645.783 617.816 Z"/>
<path  fill={stroke} stroke={stroke} strokeWidth="1" strokeLinecap="butt" strokeLinejoin="round" d="M 645.783 617.816 L 657.561 660.095 "/>
<path  fill={stroke} d="M 632.465 624.410 C 635.602 622.149 641.285 619.188 645.784 617.816 L 657.560 660.095 C 657.313 660.045 659.361 659.050 658.534 659.716 L 632.465 624.410 Z"/>
<path  fill={stroke} stroke={stroke} strokeWidth="1" strokeLinecap="butt" strokeLinejoin="round" d="M 632.465 624.410 L 658.534 659.716 "/>
<path  fill={stroke} d="M 624.694 632.156 C 626.223 630.189 629.506 626.709 632.465 624.410 L 658.534 659.716 C 658.701 659.479 660.067 658.131 659.480 658.917 L 624.694 632.156 Z"/>
<path  fill={stroke} stroke={stroke} strokeWidth="1" strokeLinecap="butt" strokeLinejoin="round" d="M 624.694 632.156 L 659.480 658.917 "/>
<path  fill={stroke} d="M 621.093 637.919 C 621.633 636.882 623.117 634.303 624.694 632.157 L 659.480 658.916 C 659.771 658.441 660.443 657.376 660.008 658.210 L 621.093 637.919 Z"/>
<path  fill={stroke} stroke={stroke} strokeWidth="1" strokeLinecap="butt" strokeLinejoin="round" d="M 621.093 637.919 L 660.008 658.210 "/>
<path  fill={stroke} d="M 618.189 648.982 C 619.896 640.497 620.409 639.297 621.094 637.917 L 660.007 658.212 C 660.359 657.468 660.370 657.466 662.077 648.982 L 618.189 648.982 Z"/>
<path  fill={stroke} stroke={stroke} strokeWidth="1" strokeLinecap="butt" strokeLinejoin="round" d="M 618.189 648.982 L 662.077 648.982 "/> 

  </>
);

const CLOUD_STROKE = "#79beda";
const CLOUD_FILL = "#2b7c9e";
const NUM_CLOUDS = 7;
const CLOUD_DURATION = 10;
const CLOUD_SCALE = .5;
const CLOUD_SPACING = .75;

const NumericSlider: React.FC<{
  id: string;
  label: string;
  onChange: (value: number) => void;
  value: number;
  min: number;
  max: number;
  step: number;
  valueSuffix?: string;
}> = (props) => {
  return (
    <p>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type="range"
        id={props.id}
        min={props.min}
        max={props.max}
        value={props.value}
        step={props.step}
        onChange={(e) => props.onChange(parseFloat(e.target.value))}
      />
      <span>
        {" "}
        {props.value}
        {props.valueSuffix}
      </span>
    </p>
  );
};

const Clouds: React.FC<{}> = () => {
  const [stroke, setStroke] = useState(CLOUD_STROKE);
  const [fill, setFill] = useState(CLOUD_FILL);
  const [numClouds, setNumClouds] = useState(NUM_CLOUDS);
  const [duration, setDuration] = useState(CLOUD_DURATION);
  const [spacing, setSpacing] = useState(CLOUD_SPACING);
  const [scaleValue, setScaleValue] = useState(CLOUD_SCALE); 

	const cloudposx = [-400, 400, -900,   0,  900,  -400,    400, -1200, 1200, -900,   0,   900, -400,  400  ];
	const cloudposy = [   0,   0,  600, 600,  600,   1200,  1200,  1200, 1200, 1800, 1800, 1800, 2400, 2400  ];

  let clouds: JSX.Element[] = [];
	let xpos = 0;
	let ypos = 0;

  for (let i = 0; i < numClouds; i++) {

  let starttime = Math.random() * duration * -1; /* remove the -1 for the coming alive effect */
		
  let xpos = cloudposx[i] * spacing;
  let ypos = cloudposy[i] * spacing;

  clouds.push(
       <g key={i} transform={`translate(${xpos} ${ypos}) scale(${scaleValue} ${scaleValue})`}> 
       <g>
       <Cloud fill={fill} stroke={stroke} />

<animateTransform
	attributeName="transform"
	type="rotate"
	from="0 640 640"
	to="-360 640 640"
	dur={`${duration}s`}
	begin={`${starttime}s`}
	repeatCount="indefinite"  
	additive="sum" 
/>

/* pulse */
<animateTransform
      attributeName="transform"
      type="scale"
     
      dur={`${duration}s`}
      values="1; 1.5; 1;"
      begin={`${starttime}s`}
      repeatCount="indefinite"
      additive="sum" >
</animateTransform>


/* https://codepen.io/tutsplus/details/MLBMRw */
/* https://webdesign.tutsplus.com/tutorials/how-to-make-an-animated-beating-heart-with-svg--cms-32759  */
/* https://stackoverflow.com/questions/27829312/svg-animatetransform-rotate-and-scale-the-same-object-at-the-same-time */
		     </g>
		    </g>
		);
  }

  return (
    <>
     <div className="canvas">
      <svg width="100%" max-width="1000px" height="600px" viewBox="500 0 100 4000">
        {clouds}
      </svg>
     </div>
     <div className="sidebar">
        <label htmlFor="stroke">Stroke: </label>
        <input
          type="color"
          value={stroke}
          onChange={(e) => setStroke(e.target.value)}
          id="stroke"
        />{" "}
        <label htmlFor="fill">Fill: </label>
        <input
          type="color"
          value={fill}
          onChange={(e) => setFill(e.target.value)}
          id="fill"
        />
      <NumericSlider
        id="numClouds"
        label="Number of elements"
        min={1}
        max={14}
        value={numClouds}
        step={1}
        onChange={setNumClouds}
      />
      <NumericSlider
        id="duration"
        label="Cycle duration"
        min={1}
        max={20}
        value={duration}
        step={0.5}
        onChange={setDuration}
        valueSuffix="s"
      />
      <NumericSlider
        id="spacing"
        label="Spacing"
        min={.1}
        max={2}
        value={spacing}
        step={.1}
        onChange={setSpacing}
      />
      <NumericSlider
        id="scaleValue"
        label="Scale"
        min={.5}
        max={2}
        value={scaleValue}
        step={0.25}
        onChange={setScaleValue}
      />
      </div>
    </>
  );
};

export const CloudsPage: React.FC<{}> = () => (
  <Page title="Clouds!">
    <Clouds />
  </Page>
);

