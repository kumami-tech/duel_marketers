import type { ComponentPropsWithoutRef } from "react";
import type { FC } from "react";

type BusinessManIconProps = ComponentPropsWithoutRef<"svg">;

export const BusinessManIcon: FC<BusinessManIconProps> = (props) => {
  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_19_134)">
        <path
          d="M91.1921 80.3771C90.5611 76.9652 88.3562 75.1441 86.1421 74.6779C80.031 71.7781 70.3347 67.0668 68.3122 65.7676C67.7271 65.3922 67.0869 64.8619 66.4369 64.2119C66.1537 63.5084 65.8425 62.6478 65.5677 61.907C65.3031 61.1754 65.0466 60.4986 64.8544 60.0225C64.7812 59.8486 64.6896 59.6838 64.5806 59.5373V59.2299L64.5935 59.1047C64.7201 59.1803 64.8658 59.2238 64.9986 59.2902C65.2204 59.4055 65.4349 59.5092 65.6294 59.6008C65.6271 59.5932 65.6263 59.584 65.6247 59.5764C65.6369 59.5809 65.647 59.5885 65.6591 59.5924C65.3775 58.6006 65.3433 57.3693 65.3775 56.3789C65.405 55.899 65.4454 55.4496 65.5027 55.081C65.6056 54.9484 65.7025 54.8248 65.7912 54.6973C65.7933 54.6949 65.7941 54.6928 65.7972 54.6904C65.997 54.8682 66.3511 55.326 66.9781 56.1713C67.1162 56.368 67.2519 56.5611 67.4206 56.8068C67.4206 56.8068 67.4244 56.7824 67.4251 56.7756C67.4349 56.7893 67.4419 56.7976 67.4519 56.8113C67.4519 56.8113 67.7906 54.5523 67.2695 52.4115C67.3425 52.2742 67.416 52.1461 67.4792 52.018C67.7669 52.1269 68.2904 52.2986 69.1585 52.5152C69.3103 52.5601 69.4386 52.5984 69.6019 52.6465C69.5972 52.6381 69.5943 52.6297 69.5896 52.6213C69.604 52.625 69.6142 52.6281 69.6292 52.631C69.0525 51.5508 68.6595 50.6275 68.3849 49.8678C68.44 49.7312 68.4765 49.5838 68.5132 49.4473C68.7695 49.5107 69.0343 49.5389 69.2997 49.5389C72.3644 49.5389 73.8744 45.934 74.7433 43.2172C75.0218 42.3658 75.2247 41.3724 75.2843 40.3592C75.2865 40.3392 75.2911 40.3195 75.2925 40.299C76.0249 40.4248 76.7314 40.4172 77.3533 40.2287C77.4525 40.2074 77.5591 40.1906 77.6523 40.1654C77.6279 40.1654 77.6027 40.1586 77.5783 40.1578C77.6021 40.1488 77.6287 40.1441 77.6523 40.1342C76.829 40.1342 76.015 39.7314 75.2826 39.1463C75.2093 38.1217 74.9439 37.1244 74.4328 36.292C74.1947 35.9043 73.8925 35.5869 73.5644 35.3086C73.466 35.2154 73.3736 35.1164 73.2691 35.0285C73.8261 35.1125 74.5218 35.2543 75.1246 35.468C75.2398 35.5144 75.3587 35.5588 75.4624 35.6137C75.4611 35.6076 75.458 35.5992 75.4564 35.5922C75.4677 35.5976 75.4816 35.6014 75.4931 35.6058C75.1529 34.151 74.0312 31.3998 73.5552 30.2592C73.4704 30.0418 73.4011 29.8603 73.3591 29.7428C73.5171 29.8015 74.3724 30.1424 75.513 30.7963C75.7464 30.9365 75.9869 31.0869 76.24 31.257C76.2392 31.2562 76.2361 31.2394 76.2339 31.2289C76.2468 31.2363 76.2583 31.2433 76.2705 31.251C76.2705 31.251 75.4839 27.2441 74.6423 24.8568C75.4474 9.96346 65.6863 4.79471 63.5544 4.04471C57.0238 -1.71838 43.9142 -1.58166 38.7277 6.13084C32.5134 4.42967 27.4613 7.54373 24.4995 13.491C24.4072 13.6726 24.3203 13.8609 24.2318 14.0486C24.1486 14.2295 24.0617 14.4072 23.9814 14.5928C23.5894 15.4853 23.2361 16.4306 22.9326 17.4377C22.9326 17.4377 22.9538 17.4264 22.9607 17.4224C22.957 17.4369 22.9517 17.4508 22.947 17.4652C22.947 17.4652 23.9122 16.9586 25.2611 16.0324C25.5829 15.8203 25.9232 15.5883 26.2826 15.3344C24.5689 17.009 23.4421 19.3832 22.7693 22.0162C22.5999 22.6494 22.4443 23.3002 22.3199 23.9853C22.3206 23.9846 22.3451 23.9594 22.3535 23.9504C22.3503 23.9695 22.3458 23.9877 22.3427 24.0068C22.3427 24.0068 23.5665 22.7221 24.9222 21.4549C25.2578 21.1514 25.5997 20.8514 25.9376 20.5728C24.791 22.6168 23.1185 28.4107 22.8386 32.1314C22.7706 32.9256 22.7617 33.6275 22.8363 34.1654C22.837 34.1639 22.8578 34.1486 22.8615 34.1447C22.863 34.1553 22.863 34.1691 22.8646 34.1791C22.8806 34.1476 24.9185 32.6248 26.1788 31.7398C26.3718 31.6101 26.5458 31.4965 26.6894 31.4072C26.6923 31.4988 26.7122 32.5912 25.8378 35.8353C25.8281 35.8803 25.8195 35.917 25.8013 35.9629C25.7189 36.0635 25.6456 36.1734 25.5724 36.2924C25.0415 37.143 24.7859 38.1769 24.7218 39.2289C24.7218 39.2381 24.7218 39.2381 24.7218 39.2473C24.3701 40.1978 24.08 40.9357 23.9839 41.182L23.929 41.2598C23.9396 41.2545 23.9495 41.2506 23.9595 41.2453C23.9564 41.2537 23.9458 41.2826 23.9435 41.2873C24.1556 41.1783 24.354 41.0689 24.5517 40.9599C24.6218 40.9279 24.6874 40.8898 24.7599 40.8599C24.8523 41.6971 25.0238 42.5072 25.2519 43.2174C25.9013 45.2392 26.9083 47.7455 28.637 48.9082C28.3236 49.3607 27.965 49.8307 27.5765 50.3158C27.4529 50.4584 27.3415 50.6012 27.2066 50.743C27.2171 50.7424 27.2281 50.74 27.2386 50.7385C27.2281 50.7506 27.2203 50.7621 27.2097 50.7744C28.6738 50.6279 29.8992 50.1701 30.8595 49.5293H30.8695C31.0792 49.5293 31.2814 49.5025 31.482 49.456C31.5187 49.5941 31.5644 49.74 31.6103 49.8771C31.399 50.4814 31.0755 51.2139 30.6747 52.0203C30.5703 52.2148 30.4849 52.4049 30.3681 52.6018C30.3771 52.5994 30.3833 52.5973 30.3933 52.5949C30.3865 52.6078 30.3818 52.6185 30.3749 52.6314C31.5462 52.3568 32.1771 52.1463 32.516 52.0182C32.6257 52.2379 32.7538 52.4668 32.8997 52.7131V52.7314C32.8462 54.0986 32.5892 55.4613 32.5121 55.8451C32.4984 55.8916 32.4869 55.9236 32.48 55.9314C32.4861 55.9283 32.49 55.9267 32.496 55.9238C32.4937 55.9367 32.4884 55.9611 32.4884 55.9611C33.549 55.5041 34.1349 55.1836 34.4185 55.0006C34.5193 55.1287 34.6017 55.2293 34.7115 55.3576L34.7206 55.3658V55.3941C34.7572 56.1678 34.7915 57.6119 34.6222 58.9746C34.5804 59.2623 34.5382 59.5516 34.4726 59.8191C34.4779 59.8178 34.4831 59.8139 34.4894 59.8117C34.4863 59.8238 34.4847 59.8369 34.4826 59.849C34.8105 59.74 35.1189 59.5941 35.4103 59.4211L35.4156 59.4355V59.5379C35.3058 59.6844 35.2142 59.8492 35.141 60.023C34.9488 60.4992 34.7023 61.1758 34.4277 61.9076C34.1531 62.6484 33.8425 63.509 33.5585 64.2125C32.9093 64.8625 32.2593 65.3926 31.6925 65.759C29.6609 67.0674 19.9646 71.7787 13.8626 74.6785C11.6486 75.1447 9.44427 76.9566 8.81263 80.3685C8.68451 81.0361 8.51966 81.9426 8.6388 95.4725L8.67533 100H91.3292L91.366 95.4719C91.4759 81.942 91.3111 81.0355 91.1921 80.3771ZM13.4447 80.658C13.546 80.3482 13.6744 80.0949 13.8161 79.8881C13.8244 79.8768 13.8322 79.8629 13.8413 79.8508C14.2175 79.3258 14.689 79.1236 15.0521 79.1236H15.1437C15.1437 79.1236 26.954 73.5475 32.2083 70.723C32.7195 70.4521 33.1878 70.1988 33.5603 69.9875C34.237 74.2424 35.2601 81.6154 35.6171 85.3539L35.8925 88.2262L36.0437 90.0062L36.0613 89.9894L36.0652 90.0283L39.4687 86.7994C41.4722 84.8967 44.1706 82.3623 46.5037 80.1939C47.0064 80.6701 47.6466 81.1088 48.4431 81.365V82.408C47.4003 83.1588 46.3298 84.9783 45.8447 87.5219C45.6165 88.7199 45.2779 92.05 45.049 95.426H13.2134C13.1585 89.3607 13.131 82.1523 13.3042 81.2094C13.3394 81.0209 13.3843 80.8484 13.4347 80.6898C13.4386 80.6793 13.4415 80.6678 13.4447 80.658ZM34.6773 45.9715C34.6292 45.6601 34.581 45.3506 34.5468 45.0201C34.4277 44.1047 34.3636 43.1166 34.3179 42.0371C34.2722 41.0031 34.2538 39.8787 34.2538 38.6703C34.2355 33.9957 34.8855 31.6724 36.1749 27.0348L36.2755 26.6961C37.062 23.8596 38.3704 21.1982 39.3953 19.3687V19.359C41.0599 18.207 42.872 17.3371 44.5001 16.9992C44.9847 16.8986 45.4515 16.8435 45.8902 16.8435C46.1191 16.8435 46.2839 16.8986 46.4304 16.9992C46.5226 17.0633 46.5951 17.1527 46.663 17.2496C46.6759 17.2687 46.6919 17.284 46.7048 17.3037C46.9201 17.6478 47.0345 18.1416 47.2169 18.6275C51.0316 27.8217 60.5271 32.3041 65.5314 34.5455C65.6779 35.7709 65.7511 37.0885 65.7511 38.6709C65.7511 39.8611 65.7328 40.958 65.687 41.9828C65.6413 43.1082 65.5679 44.1328 65.4581 45.0842C65.3484 45.9348 65.2203 46.7221 65.0378 47.4629C65.0378 47.4721 65.0378 47.4721 65.0378 47.4812C64.8454 48.2588 64.6173 48.9723 64.3154 49.658C64.2322 49.8601 64.123 50.0791 64.004 50.3172C63.9951 50.3172 63.9951 50.3264 63.9951 50.3355C63.9583 50.3906 63.931 50.4453 63.9035 50.5004C63.5097 51.2137 62.9703 52.0553 62.2937 52.9516C61.6437 53.8207 60.8753 54.7353 60.0064 55.6226L59.9515 55.6777C59.2923 56.3553 58.5798 57.0135 57.8199 57.6262C55.496 59.5016 52.7798 60.9107 49.9984 60.9107C47.2265 60.9107 44.5097 59.5016 42.1859 57.6262C41.4083 57.0045 40.6759 56.3277 40.0083 55.632C39.9992 55.6228 39.99 55.6137 39.99 55.6137C39.1208 54.7273 38.3527 53.8117 37.7027 52.9428C37.0351 52.0463 36.4867 51.2049 36.1021 50.5006C36.0656 50.4365 36.0288 50.3723 36.0013 50.3174C35.9923 50.3082 35.9923 50.3082 35.9923 50.299L34.9769 47.5271C34.9769 47.5088 34.9677 47.4998 34.9677 47.4814C34.8999 47.1992 34.8425 46.9002 34.7861 46.6019C34.7458 46.3933 34.7101 46.1814 34.6773 45.9715ZM29.9562 46.4584C29.0628 45.6947 28.316 43.7635 27.8681 42.3849C27.5027 41.2504 27.3654 40.0152 27.4935 39.0189V39.0092C28.6921 38.076 29.3689 37.3627 29.3689 37.3627C29.781 37.6373 30.1097 37.9568 30.3662 38.3232V38.6887C30.3662 40.7021 30.4027 42.6781 30.5859 44.5801V44.5898C30.4333 45.1918 30.254 45.7357 30.0464 46.2455C30.015 46.3142 29.9906 46.3912 29.9562 46.4584ZM46.3236 74.1523C46.2542 74.2135 46.1786 74.2805 46.1099 74.3484C46.0001 74.44 45.89 74.5406 45.7802 74.6414C45.3234 75.0625 44.8288 75.5103 44.3261 75.9863C43.9874 76.2877 43.6486 76.6082 43.3015 76.9287C42.1267 78.0174 40.9197 79.1465 39.8402 80.1551L39.6396 80.3213C39.5031 79.2471 39.3488 78.0928 39.1939 76.9287C39.0931 76.1695 38.9841 75.4004 38.8826 74.6414C38.462 71.6865 38.0318 68.8781 37.7023 67.1219C37.6755 66.9295 37.639 66.7557 37.6115 66.6C37.6206 66.5816 37.6298 66.5725 37.639 66.5635C37.6574 66.5908 37.6755 66.6183 37.7023 66.6459C37.9587 66.9937 38.2425 67.3234 38.5537 67.6613C38.9374 68.0824 39.4318 68.5486 39.9896 69.043C41.1607 70.1043 42.6156 71.2844 43.9964 72.3549C44.6398 72.8568 45.2523 73.3223 45.829 73.7549C45.9933 73.8877 46.1687 74.0234 46.3236 74.1523ZM39.9896 61.2213V60.8277C40.2001 61.0016 40.4199 61.1664 40.6488 61.3221C41.5085 61.9621 42.414 62.5473 43.3656 63.0416C45.4148 64.1121 47.6464 64.798 49.998 64.798C52.3492 64.798 54.59 64.1121 56.6394 63.0326C57.5906 62.5391 58.497 61.9621 59.347 61.3221C59.4935 61.2221 59.6308 61.1123 59.7697 61.0053C59.849 60.9525 59.9201 60.8994 60.006 60.8488V61.2578C59.823 61.8797 59.4658 62.7303 58.8533 63.6084C58.6427 63.9197 58.3872 64.24 58.1035 64.5424C56.521 66.2437 52.4683 69.3451 49.998 71.1646C47.5191 69.3351 43.4847 66.2346 41.9015 64.5424C41.6085 64.231 41.362 63.9199 41.1425 63.5994C40.5206 62.7121 40.1636 61.8432 39.9896 61.2213ZM60.3378 80.3262C59.2163 79.2779 57.9421 78.0762 56.7033 76.9289C56.356 76.6084 56.0173 76.2879 55.6787 75.9865C55.1667 75.5103 54.673 75.0627 54.2154 74.6416C54.1056 74.5408 53.9956 74.4402 53.8857 74.3486C53.8179 74.2807 53.7423 74.2143 53.6736 74.1525L53.6591 74.1365C54.3626 73.6162 55.1675 73.0043 55.9992 72.3551C57.3808 71.2846 58.8349 70.1045 60.006 69.0516C60.5638 68.5488 61.0581 68.0826 61.4419 67.6615C61.7533 67.3236 62.0369 66.9939 62.2933 66.6461C62.3208 66.6185 62.339 66.582 62.3574 66.5553C62.3658 66.5637 62.3757 66.5728 62.3941 66.591C62.3574 66.7559 62.3298 66.9297 62.2933 67.1221C61.9638 68.8783 61.5335 71.6867 61.113 74.6416C61.0124 75.4006 60.9025 76.1697 60.8017 76.9289C60.6919 77.7551 60.5849 78.5644 60.4812 79.3551C60.4326 79.6762 60.3937 80.0125 60.3378 80.3262ZM66.4476 69.982C70.6117 72.4021 84.8519 79.1236 84.8519 79.1236H84.9535C85.5386 79.1236 86.4076 79.6455 86.6913 81.2096C86.8652 82.1525 86.847 89.3607 86.7919 95.4262H54.947C54.7183 92.0502 54.3802 88.7201 54.1513 87.5221C53.666 84.9785 52.5962 83.159 51.5527 82.4082V81.3652C52.3492 81.109 52.9892 80.6703 53.4929 80.1941C55.8343 82.3625 58.533 84.8969 60.5363 86.7996L62.6228 88.7787L63.9083 90.0254L63.9107 90.001L63.9396 90.0285L64.3882 85.3539C64.7087 81.9924 65.5587 75.7096 66.2193 71.3799C66.2972 70.8937 66.3744 70.4154 66.4476 69.982ZM69.1394 17.2828C69.3835 17.6748 69.5269 17.958 69.6156 18.1433C69.6429 18.215 69.6804 18.2937 69.6988 18.3586L69.3142 18.2992L69.3081 18.2953C69.3081 18.2953 69.3042 18.2961 69.299 18.2916L69.2953 18.2924L68.0386 18.0963L67.3482 17.9711C67.3482 17.9711 67.3558 17.9871 67.3572 17.9902L67.3199 17.9842C67.3199 17.9842 67.5632 18.4924 67.9538 19.2002C68.1925 19.6305 68.4956 20.141 68.8251 20.6482C68.8701 20.7213 68.9167 20.7986 68.9617 20.8711L68.9714 20.9C68.6861 20.9207 68.4054 20.9252 68.1277 20.9129L68.1224 20.9084C65.4529 20.7771 63.3134 19.1246 62.2882 18.1664C62.073 17.9611 61.9044 17.7849 61.7863 17.6537C62.3714 17.8244 63.0001 17.9406 63.6601 17.9603C63.8173 17.9672 63.9783 17.9572 64.1378 17.9512C64.1927 17.9512 64.2468 17.9527 64.3011 17.9535L64.3652 17.9664C64.362 17.9625 64.3591 17.958 64.356 17.9543C64.3644 17.9543 64.3728 17.9543 64.3812 17.9543C64.379 17.9519 64.3775 17.9488 64.3759 17.9467C64.3806 17.9467 64.3851 17.9467 64.3896 17.9467C64.0982 17.5834 63.8716 17.2195 63.6884 16.8785C63.6677 16.8389 63.6464 16.7984 63.6257 16.7578C63.458 16.4283 63.3314 16.1223 63.2427 15.8713C63.0931 15.4396 63.0482 15.1617 63.0482 15.1617L64.6427 15.351L64.9472 15.3877L65.096 15.4205L65.0892 15.4045L65.1249 15.4084C65.1249 15.4084 64.7886 14.5935 64.0232 13.5574C63.8667 13.3461 63.6869 13.1226 63.4923 12.8982C63.4708 12.8715 63.449 12.8431 63.4275 12.815L63.4115 12.7738C63.6351 12.8219 63.8648 12.8906 64.105 12.9836C64.221 13.0293 64.3355 13.076 64.4468 13.1224C66.9167 14.1972 68.4031 16.0918 69.1394 17.2828ZM71.1724 43.351C71.1923 43.3615 71.2113 43.3717 71.2312 43.3822C70.1609 42.1654 69.9228 39.074 69.8769 37.7189C69.9538 37.6084 70.0486 37.5092 70.1425 37.4281C70.1507 37.4236 70.1538 37.4152 70.1622 37.4098C70.4271 37.7303 70.829 38.1865 71.158 38.4695C71.4775 38.7533 71.9628 39.0738 72.5388 39.366C72.6031 40.2992 72.4564 41.3787 72.1369 42.3849C71.5693 44.1412 70.499 46.7947 69.3003 46.7947C69.246 46.7947 69.1913 46.7848 69.1447 46.7764C69.3652 45.4037 69.4925 43.9764 69.5658 42.5129C69.8396 42.6502 70.2974 42.8844 70.8093 43.157C70.9406 43.2355 71.074 43.3164 71.2076 43.4035C71.1947 43.3883 71.1855 43.366 71.1724 43.351Z"
          fill="#FF0000"
        />
      </g>
      <defs>
        <clipPath id="clip0_19_134">
          <rect width="100" height="100" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};