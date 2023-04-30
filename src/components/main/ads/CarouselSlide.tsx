import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import leftArrow from "../../../image/angle-left.png";
import rightArrow from "../../../image/angle-right.png";
import { adsType } from "../../../types/types";
import { getAdsData } from "../../../util/api";

function CarouselSlide() {
  const { data: adsData } = useQuery(["adsData"], getAdsData, {
    staleTime: 1000 * 60 * 10,
    cacheTime: 1000 * 60 * 15,
  });
  const [adValue, setAdValue] = useState(0);
  const onClickAfter = () => {
    if (adValue === 15) {
      return setAdValue(0);
    }
    setAdValue(adValue + 5);
  };
  const onClickBefore = () => {
    if (adValue === 0) {
      return setAdValue(15);
    }
    setAdValue(adValue - 5);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      onClickAfter();
    }, 2000);

    return () => clearInterval(intervalId);
  }, [adValue]);
  return (
    <Wrap>
      <Title>광고</Title>
      <AdsBox>
        <AdsSlide adValue={adValue}>
          {adsData?.map((item: adsType) => (
            <AdsImageBox key={uuidv4()}>
              <AdsImage src={item.imageLink} />
              <AdsTitle>{item.title}</AdsTitle>
            </AdsImageBox>
          ))}
        </AdsSlide>
      </AdsBox>
      <AfterBtn onClick={onClickAfter}>
        <ArrowImg src={rightArrow} />
      </AfterBtn>
      <BeforeBtn onClick={onClickBefore}>
        <ArrowImg src={leftArrow} />
      </BeforeBtn>
    </Wrap>
  );
}

export default CarouselSlide;
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`;
const Title = styled.div`
  width: 532px;
  margin: 12px auto 8px auto;
`;
const AdsBox = styled.div`
  width: 540px;
  overflow: hidden;
  margin: auto;
`;
const AdsSlide = styled.div<{ adValue: number }>`
  width: 1200px;
  margin: 8px auto;
  display: flex;
  flex-direction: row;
  position: relative;
  transition: 0.1s;
  transform: ${({ adValue }) => `translateX(-${adValue}0%)`};
`;
const AdsImageBox = styled.div`
  display: flex;
  flex-direction: column;
`;
const AdsImage = styled.img`
  width: 600px;
  height: 300px;
`;
const AdsTitle = styled.div`
  margin-top: 12px;
  width: 540px;
  text-align: center;
`;
const AfterBtn = styled.div`
  width: 40px;
  cursor: pointer;
  position: relative;
  top: -200px;
  left: 480px;
`;
const BeforeBtn = styled.div`
  width: 40px;
  cursor: pointer;
  position: relative;
  top: -240px;
  left: 40px;
`;
const ArrowImg = styled.img`
  width: 32px;
  height: 32px;
`;
