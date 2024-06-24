import Svg, { Path, G, Mask } from 'react-native-svg';
import { useTheme } from 'styled-components/native';

export const IconHeaderLogo = () => {
  const colors = useTheme();

  return (
    <Svg width="124" height="24" viewBox="0 0 124 24" fill="none">
      <Mask
        id="mask0_489_50965"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="25"
        height="24"
      >
        <Path
          d="M0 4.11429C0 1.84204 1.85054 0 4.13335 0H19.9779C22.2605 0 24.1112 1.84204 24.1112 4.11429V19.8857C24.1112 22.1578 22.2605 24 19.9779 24H4.13335C1.85054 24 0 22.1578 0 19.8857V4.11429Z"
          fill={colors.theme === 'dark' ? colors.gray[900] : colors.gray[100]}
        />
      </Mask>
      <G mask="url(#mask0_489_50965)">
        <Path
          d="M4.13397 1.02834H19.9785V-1.02881H4.13397V1.02834ZM23.0785 4.11406V19.8855H25.1452V4.11406H23.0785ZM19.9785 22.9712H4.13397V25.0283H19.9785V22.9712ZM1.03396 19.8855V4.11406H-1.03271V19.8855H1.03396ZM4.13397 22.9712C2.42187 22.9712 1.03396 21.5898 1.03396 19.8855H-1.03271C-1.03271 22.7257 1.28048 25.0283 4.13397 25.0283V22.9712ZM23.0785 19.8855C23.0785 21.5898 21.6907 22.9712 19.9785 22.9712V25.0283C22.8319 25.0283 25.1452 22.7257 25.1452 19.8855H23.0785ZM19.9785 1.02834C21.6907 1.02834 23.0785 2.40985 23.0785 4.11406H25.1452C25.1452 1.27372 22.8319 -1.02881 19.9785 -1.02881V1.02834ZM4.13397 -1.02881C1.28048 -1.02881 -1.03271 1.27372 -1.03271 4.11406H1.03396C1.03396 2.40985 2.42187 1.02834 4.13397 1.02834V-1.02881Z"
          fill={colors.gray[900]}
        />
      </G>
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M13.5438 17.1862L12.9407 17.287C12.6927 17.3285 12.5153 17.5503 12.5284 17.8023L12.5646 18.4898C12.5783 18.7531 12.795 18.9595 13.0581 18.9595H18.0709C18.3437 18.9595 18.5651 18.7376 18.5651 18.4637V17.7495C18.5651 17.5202 18.4084 17.3206 18.1859 17.2671L17.2525 17.0422L17.248 17.0381L17.2476 17.0374L17.2456 17.0353L17.2449 17.0347L17.239 17.0288L17.2383 17.0285L17.2135 17.0035L17.2091 16.9987L17.207 16.9966L17.2049 16.9946L17.2029 16.9928L17.2008 16.9908L17.2004 16.9901L17.1956 16.9853L17.1949 16.9846L17.1929 16.9825L17.1922 16.9819L17.1874 16.9771L17.1867 16.9764L17.186 16.9757L17.1853 16.975L17.1818 16.9716L17.1812 16.9709L17.1805 16.9702L17.1798 16.9695L17.1791 16.9688L17.1784 16.9682L17.1777 16.9675L17.177 16.9668L17.1763 16.9661L17.1756 16.9654L17.175 16.9647L17.1743 16.964L17.1736 16.9633L17.1729 16.9627L17.1722 16.962L17.1701 16.9599L17.1694 16.9592L17.1688 16.9585L17.1681 16.9579L17.1605 16.95L17.1598 16.9493L17.1564 16.9459L17.1557 16.9452L17.1209 16.9102L17.1185 16.9082L17.1164 16.9058L17.1157 16.9051L17.1105 16.8999L17.1099 16.8992L17.1078 16.8972L17.1068 16.8961L17.1033 16.8927L17.1026 16.892L17.1019 16.891L17.1009 16.8903L17.0988 16.8883L17.0981 16.8876L17.0975 16.8865L17.0968 16.8859L17.0957 16.8852L17.095 16.8845L17.0833 16.8725L17.0827 16.8718L17.0816 16.8711L17.0809 16.8704L17.0789 16.868L17.0782 16.8673L17.0771 16.8667L17.0764 16.8656L17.0713 16.8605L17.0689 16.8581L17.0651 16.8543L17.063 16.8523L17.0537 16.843L17.022 16.8111L17.0213 16.8104L17.0158 16.8049L17.0151 16.8039L17.0093 16.7984L17.0086 16.7977L17.0062 16.7954L17.0055 16.7947L17.0048 16.7936L17.0038 16.7929L16.9862 16.7755L16.9855 16.7744L16.9848 16.7737L16.9838 16.7727L16.9814 16.7703L16.9807 16.7696L16.9752 16.7638L16.9741 16.7631L16.9686 16.7573L16.9676 16.7566L16.9624 16.7511C16.8171 16.5907 16.6511 16.4096 16.4644 16.208C16.2808 15.9783 16.0624 15.7297 15.8106 15.462L12.1233 11.3353L16.7468 6.9457L17.8394 6.75665C18.086 6.71403 18.2617 6.49357 18.2493 6.24305L18.2128 5.51081C18.1997 5.24681 17.9823 5.03955 17.7192 5.03955H13.5917C13.3289 5.03955 13.1122 5.24605 13.0981 5.5095L13.0619 6.20016C13.0492 6.44376 13.2149 6.66051 13.4525 6.71136L14.0181 6.83232L10.0256 10.9752L9.71219 11.0583V8.15537C9.72666 7.69104 9.74113 7.33697 9.75525 7.09117C9.76145 7.03807 9.76765 6.99137 9.7735 6.95071L10.8151 6.71088C11.049 6.65695 11.2105 6.44201 11.1981 6.20132L11.1616 5.5095C11.1478 5.24605 10.9312 5.03955 10.668 5.03955H6.09379C5.8358 5.03955 5.62121 5.23851 5.60089 5.49651L5.54646 6.18853C5.52717 6.43436 5.69079 6.65712 5.93052 6.71143L6.96076 6.94491C6.96214 6.98993 6.96283 7.04146 6.96283 7.09985V7.1112L6.96351 7.12251C6.97764 7.37921 6.98521 7.7425 6.98521 8.21595V8.22254V8.22912C7.00002 8.68461 7.00726 9.24542 7.00726 9.91245V14.1091C7.00726 15.09 7.00002 15.8518 6.98521 16.3969C6.97729 16.6891 6.96765 16.9061 6.95697 17.0559L5.95084 17.2877C5.71214 17.3429 5.54956 17.5651 5.56885 17.8102L5.62327 18.5024C5.6436 18.7606 5.85819 18.9595 6.11583 18.9595H10.6036C10.8616 18.9595 11.0759 18.7606 11.0962 18.5024L11.1506 17.8102C11.1699 17.5651 11.0073 17.3429 10.7686 17.2877L9.77385 17.0587C9.76283 16.8992 9.74939 16.6777 9.73424 16.3915C9.71943 15.847 9.71219 15.0865 9.71219 14.1091V12.888H9.81036L13.0957 16.6373L13.0995 16.6414C13.2776 16.8338 13.425 17.0151 13.5438 17.1862Z"
        fill={colors.gray[900]}
      />
      <Path
        d="M34.4443 4.0669C34.4443 3.88183 34.4798 3.72877 34.5504 3.60778C34.6286 3.48675 34.8091 3.42627 35.0926 3.42627H36.9092C37.1145 3.42627 37.2633 3.49032 37.3556 3.61844C37.4476 3.73944 37.4937 3.87113 37.4937 4.01352V12.8222L42.1685 7.73987C42.2605 7.64733 42.3525 7.57615 42.4448 7.5263C42.544 7.47648 42.6607 7.45156 42.7954 7.45156H45.2282C45.3843 7.45156 45.5011 7.48362 45.5789 7.54766C45.6567 7.61174 45.696 7.69715 45.696 7.80391C45.696 7.87509 45.6853 7.93917 45.664 7.99612C45.6426 8.05307 45.6037 8.11711 45.5472 8.18829L40.7766 13.1959L46.4397 20.2214H46.4183C46.4962 20.2999 46.5492 20.3853 46.5778 20.4779C46.6133 20.5705 46.6308 20.6452 46.6308 20.7021C46.6308 20.8231 46.5954 20.9047 46.5244 20.9476C46.4538 20.9905 46.3474 21.0117 46.2058 21.0117H43.4964C43.2911 21.0117 43.0927 20.8622 42.9015 20.5633L38.7899 15.1924L37.5147 16.5271V20.3709C37.5147 20.435 37.5044 20.5063 37.483 20.5845C37.4617 20.6558 37.4262 20.7234 37.3766 20.7875C37.3342 20.8516 37.274 20.9047 37.1961 20.9476C37.1183 20.9905 37.0225 21.0117 36.9092 21.0117H35.0285C34.9224 21.0117 34.8339 20.9905 34.7629 20.9476C34.6923 20.9047 34.6321 20.8516 34.5825 20.7875C34.5329 20.7234 34.4974 20.6593 34.476 20.5951C34.455 20.5242 34.4443 20.4673 34.4443 20.4244V4.0669Z"
        fill={colors.gray[900]}
      />
      <Path
        d="M48.5654 8.10264C48.5654 7.91756 48.6185 7.76451 48.7249 7.64352C48.831 7.51539 48.987 7.45131 49.1923 7.45131H50.9562C51.0341 7.45131 51.1119 7.4691 51.1898 7.50469C51.2748 7.53319 51.3492 7.57944 51.413 7.64352C51.4767 7.70046 51.5297 7.76808 51.5724 7.84638C51.6148 7.92469 51.6362 8.0101 51.6362 8.10264V20.3707C51.6362 20.7979 51.413 21.0115 50.9666 21.0115H49.203C48.778 21.0115 48.5654 20.7979 48.5654 20.3707V8.10264ZM48.5654 3.38331C48.5654 2.95621 48.7745 2.74268 49.1923 2.74268H50.9772C51.1756 2.74268 51.3351 2.79606 51.4553 2.90283C51.5759 3.00959 51.6362 3.16974 51.6362 3.38331V4.9742C51.6362 5.13791 51.5793 5.29453 51.466 5.44402C51.3527 5.58637 51.1932 5.65755 50.9879 5.65755H49.203C48.778 5.65755 48.5654 5.42975 48.5654 4.9742V3.38331Z"
        fill={colors.gray[900]}
      />
      <Path
        d="M55.0815 8.08142C55.0815 7.87498 55.1487 7.7184 55.2834 7.61163C55.425 7.50483 55.5772 7.45145 55.7401 7.45145H57.0897C57.2667 7.45145 57.401 7.50483 57.4934 7.61163C57.5853 7.7184 57.6563 7.85009 57.7059 8.00667C57.7555 8.16329 57.7906 8.3341 57.812 8.51918C57.8333 8.69716 57.8581 8.86087 57.8864 9.01032C58.0424 8.78966 58.2157 8.57613 58.4072 8.36969C58.6052 8.15616 58.8284 7.96752 59.0764 7.80381C59.3244 7.64009 59.6041 7.5084 59.9158 7.40876C60.2272 7.3091 60.5817 7.25928 60.9781 7.25928C61.3322 7.25928 61.6512 7.28417 61.9343 7.33402C62.2178 7.37671 62.4868 7.44792 62.742 7.54755C63.0038 7.64009 63.259 7.76465 63.5067 7.92127C63.7547 8.07075 64.0203 8.2487 64.3037 8.45513C64.4239 8.5334 64.5269 8.62241 64.6117 8.72205C64.704 8.82172 64.7498 8.93914 64.7498 9.0744C64.7429 9.13135 64.7322 9.19186 64.7181 9.25591C64.704 9.31999 64.6754 9.38404 64.633 9.44812L63.7619 10.8361C63.7051 10.9073 63.6379 10.9607 63.5601 10.9963C63.4891 11.0248 63.4254 11.039 63.3686 11.039C63.2552 11.039 63.1457 11.0106 63.0393 10.9536C62.8057 10.8255 62.5932 10.7044 62.4021 10.5906C62.2105 10.4767 62.0228 10.3806 61.8389 10.3023C61.6546 10.2169 61.4634 10.1528 61.265 10.1101C61.0739 10.0603 60.8579 10.0354 60.6168 10.0354C59.9865 10.0354 59.4519 10.2382 59.0127 10.644C58.5804 11.0497 58.2901 11.6085 58.1413 12.3203V20.3708C58.1413 20.798 57.9218 21.0116 57.4827 21.0116H55.7401C55.301 21.0116 55.0815 20.798 55.0815 20.3708V8.08142Z"
        fill={colors.gray[900]}
      />
      <Path
        d="M65.5339 8.31603C65.5339 8.31603 65.5301 8.3018 65.5232 8.27335C65.516 8.24485 65.5053 8.20927 65.4912 8.16655C65.4843 8.12386 65.477 8.07757 65.4702 8.02776C65.4629 7.97794 65.4595 7.93522 65.4595 7.89963C65.4595 7.76437 65.5053 7.65761 65.5976 7.5793C65.6968 7.49389 65.8418 7.45117 66.033 7.45117H67.9457C68.1155 7.45117 68.2536 7.49389 68.36 7.5793C68.4661 7.66474 68.5512 7.78573 68.6149 7.94235L68.8061 8.4228C68.9477 8.82853 69.1072 9.28412 69.2842 9.78949C69.4685 10.2949 69.6562 10.8181 69.8474 11.3591C70.0385 11.8929 70.23 12.4268 70.4212 12.9606C70.6124 13.4874 70.7929 13.9855 70.963 14.4555C71.1328 14.9181 71.2854 15.3309 71.4198 15.694C71.5544 16.0498 71.6605 16.3241 71.7387 16.5161C71.8589 16.1674 71.9971 15.7687 72.1531 15.3202C72.316 14.8646 72.4893 14.3842 72.6735 13.8789C72.8578 13.3664 73.0455 12.8396 73.2367 12.2986C73.4279 11.7577 73.6156 11.2274 73.7999 10.7077C73.9838 10.1881 74.1574 9.69339 74.3203 9.22361C74.4905 8.74669 74.6427 8.31603 74.7771 7.93165C74.848 7.76081 74.9331 7.63981 75.0323 7.56863C75.1384 7.49033 75.28 7.45117 75.4574 7.45117H77.4441C77.6635 7.45117 77.8123 7.48676 77.8902 7.55797C77.9753 7.62915 78.0176 7.72169 78.0176 7.83555C78.0176 7.8925 78.0073 7.96368 77.9859 8.04912C77.9718 8.13452 77.9577 8.1986 77.9432 8.24129L72.8861 20.5841C72.8292 20.6839 72.7586 20.7799 72.6735 20.8725C72.5957 20.965 72.4469 21.0113 72.2271 21.0113H71.25C70.9947 21.0113 70.8215 20.9685 70.7291 20.8831C70.6441 20.7905 70.5803 20.6911 70.538 20.5841L65.5339 8.31603Z"
        fill={colors.gray[900]}
      />
      <Path
        d="M93.3213 20.3812C93.3213 20.5094 93.293 20.6164 93.2362 20.7018C93.1866 20.7799 93.1194 20.844 93.0344 20.8938C92.9496 20.9366 92.8504 20.9685 92.7371 20.9901C92.6307 21.0042 92.5173 21.0114 92.3971 21.0114H91.0689C90.8423 21.0114 90.6828 20.9507 90.5908 20.8296C90.5058 20.7086 90.442 20.5557 90.3997 20.3706L90.336 19.463C90.088 19.7123 89.8117 19.9471 89.5072 20.1679C89.2096 20.3812 88.8872 20.5701 88.5404 20.7336C88.1932 20.8903 87.8249 21.0114 87.4354 21.0967C87.0458 21.1893 86.6456 21.2356 86.2346 21.2356C85.5971 21.2356 84.9809 21.1536 84.386 20.9901C83.798 20.819 83.2455 20.5842 82.7285 20.2852C82.2115 19.979 81.7403 19.6125 81.3156 19.1856C80.8975 18.7584 80.5365 18.285 80.2316 17.7655C79.9344 17.2458 79.7005 16.6869 79.5303 16.089C79.3678 15.491 79.2861 14.8684 79.2861 14.2207C79.2861 13.5728 79.3678 12.95 79.5303 12.3521C79.7005 11.7541 79.9344 11.1953 80.2316 10.6757C80.5365 10.1561 80.8975 9.68632 81.3156 9.26636C81.7403 8.83926 82.2115 8.47624 82.7285 8.17727C83.2455 7.8712 83.798 7.63627 84.386 7.47256C84.9809 7.30171 85.5971 7.21631 86.2346 7.21631C86.6879 7.21631 87.1202 7.26612 87.5308 7.36579C87.9417 7.45833 88.324 7.59359 88.6785 7.77153C89.0395 7.94238 89.3725 8.15234 89.677 8.4015C89.9815 8.64349 90.2578 8.91044 90.5058 9.20228L90.6546 8.05981C90.69 7.93168 90.7217 7.82848 90.75 7.75017C90.7855 7.66477 90.8244 7.59712 90.8671 7.5473C90.9167 7.49749 90.977 7.46546 91.0476 7.4512C91.1185 7.42987 91.2071 7.41918 91.3132 7.41918H92.3758C92.4891 7.41918 92.6024 7.42987 92.7157 7.4512C92.8291 7.47256 92.9317 7.50815 93.0237 7.558C93.116 7.60069 93.1866 7.66477 93.2362 7.75017C93.293 7.82848 93.3213 7.92812 93.3213 8.04914V20.3812ZM82.2718 14.2207C82.2718 14.7899 82.371 15.3309 82.569 15.8435C82.7674 16.3488 83.0437 16.7939 83.3978 17.1782C83.7519 17.5626 84.1662 17.8687 84.6409 18.0964C85.1228 18.3172 85.6467 18.4272 86.2133 18.4272C86.7871 18.4272 87.3221 18.3172 87.8177 18.0964C88.3206 17.8687 88.7563 17.5626 89.1245 17.1782C89.4928 16.7939 89.7835 16.3488 89.9956 15.8435C90.2082 15.3309 90.3146 14.7899 90.3146 14.2207C90.3146 13.6582 90.2082 13.1244 89.9956 12.619C89.7835 12.1065 89.4928 11.658 89.1245 11.2737C88.7563 10.8893 88.3206 10.5832 87.8177 10.3554C87.3221 10.1277 86.7871 10.0138 86.2133 10.0138C85.6467 10.0138 85.1228 10.1277 84.6409 10.3554C84.1662 10.5832 83.7519 10.8893 83.3978 11.2737C83.0437 11.658 82.7674 12.1065 82.569 12.619C82.371 13.1244 82.2718 13.6582 82.2718 14.2207Z"
        fill={colors.gray[900]}
      />
      <Path
        d="M96.1064 8.08101C96.1064 7.98134 96.1488 7.87457 96.2339 7.76067C96.3186 7.64681 96.4003 7.57563 96.4781 7.54714C96.5349 7.49019 96.6197 7.46174 96.733 7.46174C96.8463 7.45461 96.9527 7.45104 97.0519 7.45104H98.1249C98.3305 7.45104 98.4828 7.51869 98.582 7.65391C98.6808 7.78917 98.7483 7.93865 98.7838 8.10237L98.9006 9.23414C99.0635 8.99211 99.2619 8.75366 99.4954 8.51877C99.7362 8.28388 100.02 8.07387 100.346 7.88883C100.671 7.70376 101.043 7.55427 101.461 7.44038C101.879 7.32648 102.35 7.26953 102.874 7.26953C103.71 7.26953 104.454 7.42258 105.105 7.72865C105.757 8.02762 106.306 8.44046 106.752 8.96722C107.198 9.49396 107.535 10.1132 107.761 10.8251C107.995 11.5369 108.112 12.3021 108.112 13.1207V20.2425C108.112 20.4986 108.052 20.691 107.932 20.8189C107.811 20.9471 107.637 21.0112 107.411 21.0112H105.796C105.513 21.0112 105.321 20.9577 105.222 20.8511C105.13 20.7441 105.084 20.5555 105.084 20.285V13.1741C105.084 12.7968 105.02 12.4302 104.893 12.0743C104.765 11.7113 104.578 11.3874 104.33 11.1027C104.089 10.8179 103.788 10.5901 103.427 10.4193C103.065 10.2485 102.647 10.1631 102.173 10.1631C101.847 10.1631 101.507 10.2307 101.153 10.3659C100.806 10.4941 100.487 10.6791 100.197 10.9211C99.9064 11.1632 99.6656 11.4586 99.4744 11.8074C99.2829 12.149 99.1837 12.537 99.1768 12.9712V19.8901C99.1768 20.0251 99.1696 20.1606 99.1555 20.2957C99.1414 20.4311 99.1097 20.5521 99.0601 20.6587C99.0174 20.7657 98.9536 20.8511 98.8686 20.9152C98.7838 20.979 98.674 21.0112 98.5393 21.0112H96.7864C96.5525 21.0112 96.3789 20.9577 96.2656 20.8511C96.1595 20.7373 96.1064 20.5768 96.1064 20.3704V8.08101Z"
        fill={colors.gray[900]}
      />
      <Path
        d="M110.05 14.2527C110.05 13.605 110.131 12.9821 110.294 12.3842C110.464 11.7792 110.701 11.2168 111.006 10.6972C111.31 10.1776 111.675 9.70781 112.1 9.28781C112.525 8.86074 112.996 8.49769 113.513 8.19875C114.03 7.89265 114.583 7.65776 115.171 7.49404C115.766 7.3232 116.386 7.23779 117.03 7.23779C117.668 7.23779 118.284 7.3232 118.879 7.49404C119.474 7.65776 120.026 7.89265 120.536 8.19875C121.053 8.49769 121.524 8.86074 121.949 9.28781C122.374 9.70781 122.739 10.1776 123.044 10.6972C123.348 11.2168 123.582 11.7792 123.745 12.3842C123.915 12.9821 124 13.605 124 14.2527C124 14.9004 123.915 15.5234 123.745 16.1213C123.582 16.7192 123.348 17.2781 123.044 17.7975C122.739 18.3101 122.374 18.7798 121.949 19.207C121.524 19.6342 121.053 20.0007 120.536 20.3066C120.026 20.6055 119.474 20.8407 118.879 21.0115C118.284 21.175 117.668 21.257 117.03 21.257C116.386 21.257 115.766 21.175 115.171 21.0115C114.583 20.8407 114.03 20.6055 113.513 20.3066C112.996 20.0007 112.525 19.6342 112.1 19.207C111.675 18.7798 111.31 18.3101 111.006 17.7975C110.701 17.2781 110.464 16.7192 110.294 16.1213C110.131 15.5234 110.05 14.9004 110.05 14.2527ZM113.046 14.2527C113.046 14.8222 113.145 15.3632 113.343 15.8758C113.542 16.3812 113.818 16.8224 114.172 17.1996C114.526 17.5771 114.944 17.8757 115.426 18.0965C115.914 18.3173 116.446 18.4274 117.019 18.4274C117.579 18.4274 118.096 18.3173 118.571 18.0965C119.052 17.8757 119.467 17.5771 119.814 17.1996C120.161 16.8224 120.43 16.3812 120.621 15.8758C120.82 15.3632 120.919 14.8222 120.919 14.2527C120.919 13.6904 120.82 13.153 120.621 12.6405C120.43 12.128 120.161 11.6795 119.814 11.2951C119.467 10.9036 119.052 10.594 118.571 10.3662C118.096 10.1313 117.579 10.0139 117.019 10.0139C116.446 10.0139 115.914 10.1313 115.426 10.3662C114.944 10.594 114.526 10.9036 114.172 11.2951C113.818 11.6795 113.542 12.128 113.343 12.6405C113.145 13.153 113.046 13.6904 113.046 14.2527Z"
        fill={colors.gray[900]}
      />
    </Svg>
  );
};
