import React from "react";
import styled from "styled-components";
import './RecruiterDetails.css'
export const Details = ({}) => {
  return (
    <RootRootRootRoot>
      <Group>
        <Group11>
          <Text10>Recruiter profile</Text10>
          <Text9>Recruiter profile</Text9>
          <BlueRectangle1>
            <Text11>Back</Text11>
          </BlueRectangle1>
        </Group11>
        <WhiteRectangle1>
          <Group5>
            <Text14>Name</Text14>
            <Text13>Conpany</Text13>
            <Text18>Position</Text18>
            <Text16>Contact</Text16>
          </Group5>
          <Group10>
            <Text20>Ajamal Junid</Text20>
            <Text19>XYZ inc.</Text19>
            <Text12>HR</Text12>
            <Text17>abc012@gmail.com</Text17>
            <Text14>9876543210</Text14>
          </Group10>
          <Paragraph>
            Jobs posted
            {"          "}:{"   "}
            15
            <br />
            Total Vacancy
            {"       "}:{"   "}
            65
            <br />
            Hired
            {"                      "}:{"   "}
            35{" "}
          </Paragraph>
          <Pro src={`https://file.rendit.io/n/VFV8JQQMhrrO9I9eXlvi.png`} />
        </WhiteRectangle1>
      </Group>
      <Group1>
        <Text26>Company or Organization Details </Text26>
        <WhiteRectangle2>
          <Group6>
            <Group8>
              <Image1
                src={`https://file.rendit.io/n/01g3aiU1JEEqVxVLe5kE.png`}
              />
              <Text25>XYZ Inc.</Text25>
            </Group8>
            <Text22>www.xyz.com</Text22>
            <Text21>contactxyz.xyz.com</Text21>
            <Text23>Address</Text23>
            <TimberwolfRectangle4 />
          </Group6>
          <Group7>
            <Text24>Conpany Description</Text24>
            <TimberwolfRectangle5 />
          </Group7>
        </WhiteRectangle2>
      </Group1>
      <Group3>
        <Text8>Posted Jobs</Text8>
        <Group9>
          <WhiteRectangle>
            <Text7>Status</Text7>
            <TimberwolfRectangle />
            <TimberwolfRectangle />
            <TimberwolfRectangle />
            <TimberwolfRectangle />
          </WhiteRectangle>
          <BlueRectangle>
            <Text6>#</Text6>
            <Text1>Position</Text1>
            <Text2>Posted on</Text2>
            <Text3>Jobs</Text3>
            <Text4>Applicaitons</Text4>
            <Text5>Hired</Text5>
          </BlueRectangle>
        </Group9>
      </Group3>
    </RootRootRootRoot>
  );
};

const Text14 = styled.div`
  font-size: 20px;
  font-family: Inter;
  box-sizing: border-box;
`;
const TimberwolfRectangle = styled.div`
  width: 98.26%;
  height: 62px;
  flex-shrink: 0;
  box-sizing: border-box;
  background-color: rgba(217, 217, 217, 0.5);
`;
const RootRootRootRoot = styled.div`
  position: relative;
  gap: 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
`;
const Group = styled.div`
  width: 99.04%;
  gap: 14px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
`;
const Group11 = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: stretch;
  align-items: flex-start;
  box-sizing: border-box;
`;
const Text10 = styled.div`
  width: 234px;
  height: 36px;
  left: 0px;
  top: 8px;
  position: absolute;
  font-size: 30px;
  font-weight: 600;
  font-family: Inter;
  box-sizing: border-box;
`;
const Text9 = styled.div`
  position: relative;
  align-self: flex-end;
  margin: 8px 0px 0px 0px;
  font-size: 30px;
  font-weight: 600;
  font-family: Inter;
  box-sizing: border-box;
`;
const BlueRectangle1 = styled.div`
  width: 6.31%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0px 0px 13px 0px;
  padding: 2px 12px 5px 12px;
  border-radius: 8px;
  box-sizing: border-box;
  background-color: #1877f2;
`;
const Text11 = styled.div`
  color: #ffffff;
  font-size: 20px;
  font-weight: 600;
  font-family: Inter;
  box-sizing: border-box;
`;
const WhiteRectangle1 = styled.div`
  width: 98.71%;
  gap: 38px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 19px 35px 19px 39px;
  border-radius: 10px;
  box-sizing: border-box;
  background-color: #ffffff;
`;
const Group5 = styled.div`
  width: 8.54%;
  gap: 11px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 12px 0px 72px 0px;
  box-sizing: border-box;
`;
const Text13 = styled.div`
  align-self: stretch;
  margin: 0px 0px 1px 0px;
  font-size: 20px;
  font-family: Inter;
  box-sizing: border-box;
`;
const Text18 = styled.div`
  margin: 0px 0px 9px 1px;
  font-size: 20px;
  font-family: Inter;
  box-sizing: border-box;
`;
const Text16 = styled.div`
  margin: 0px 0px 0px 2px;
  font-size: 20px;
  font-family: Inter;
  box-sizing: border-box;
`;
const Group10 = styled.div`
  width: 18.49%;
  gap: 9px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 12px 80px 39px 0px;
  box-sizing: border-box;
`;
const Text20 = styled.div`
  margin: 0px 0px 2px 0px;
  font-size: 20px;
  font-family: Inter;
  box-sizing: border-box;
`;
const Text19 = styled.div`
  color: #007bff;
  font-size: 20px;
  font-family: Inter;
  box-sizing: border-box;
`;
const Text12 = styled.div`
  margin: 0px 0px 7px 0px;
  font-size: 20px;
  font-family: Inter;
  box-sizing: border-box;
`;
const Text17 = styled.div`
  align-self: stretch;
  margin: 0px 0px 7px 0px;
  font-size: 20px;
  font-family: Inter;
  box-sizing: border-box;
`;
const Paragraph = styled.div`
  margin: 12px 400px 123px 0px;
  font-size: 20px;
  font-family: Inter;
  box-sizing: border-box;
`;
const Pro = styled.img`
  min-width: 0px;
  min-height: 0px;
  margin: 0px 0px 161px 0px;
  box-sizing: border-box;
`;
const Group1 = styled.div`
  width: 99.04%;
  gap: 11px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0px 0px 2px 0px;
  box-sizing: border-box;
`;
const Text26 = styled.div`
  font-size: 20px;
  font-weight: 500;
  font-family: Inter;
  box-sizing: border-box;
`;
const WhiteRectangle2 = styled.div`
  width: 98.71%;
  gap: 93px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: flex-end;
  align-items: flex-start;
  padding: 19px 32px;
  border-radius: 10px;
  box-sizing: border-box;
  background-color: #ffffff;
`;
const Group6 = styled.div`
  width: 26.88%;
  gap: 14px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0px 0px 1px 0px;
  box-sizing: border-box;
`;
const Group8 = styled.div`
  gap: 5px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0px 0px 8px 0px;
  box-sizing: border-box;
`;
const Image1 = styled.img`
  min-width: 0px;
  min-height: 0px;
  box-sizing: border-box;
`;
const Text25 = styled.div`
  align-self: flex-end;
  margin: 17px 0px 14px 0px;
  font-size: 20px;
  font-family: Inter;
  box-sizing: border-box;
`;
const Text22 = styled.div`
  margin: 0px 0px 0px 10px;
  font-size: 20px;
  font-family: Inter;
  box-sizing: border-box;
`;
const Text21 = styled.div`
  margin: 0px 0px 4px 10px;
  font-size: 20px;
  font-family: Inter;
  box-sizing: border-box;
`;
const Text23 = styled.div`
  margin: 0px 0px 2px 13px;
  font-size: 20px;
  font-family: Inter;
  box-sizing: border-box;
`;
const TimberwolfRectangle4 = styled.div`
  width: 97.32%;
  height: 80px;
  flex-shrink: 0;
  align-self: flex-end;
  box-sizing: border-box;
  background-color: #d9d9d9;
`;
const Group7 = styled.div`
  width: 80.12%;
  gap: 33px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-end;
  align-items: flex-start;
  margin: 36px 0px 1px 0px;
  box-sizing: border-box;
`;
const Text24 = styled.div`
  margin: 0px 0px 0px 29px;
  font-size: 20px;
  font-family: Inter;
  box-sizing: border-box;
`;
const TimberwolfRectangle5 = styled.div`
  width: 100%;
  height: 184px;
  flex-shrink: 0;
  align-self: stretch;
  box-sizing: border-box;
  background-color: rgba(217, 217, 217, 0.5);
`;
const Group3 = styled.div`
  width: 99.04%;
  gap: 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  box-sizing: border-box;
`;
const Text8 = styled.div`
  font-size: 25px;
  font-family: Inter;
  box-sizing: border-box;
`;
const Group9 = styled.div`
  width: 98.79%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-end;
  padding: 0px 0px 645px 0px;
  box-sizing: border-box;
`;
const WhiteRectangle = styled.div`
  width: 1221px;
  height: 699px;
  left: 1px;
  top: 0px;
  position: absolute;
  gap: 15px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 13px 37px 320px 37px;
  border-radius: 10px;
  box-sizing: border-box;
  background-color: #ffffff;
`;
const Text7 = styled.div`
  margin: 0px 0px 32px 489px;
  font-size: 23px;
  font-weight: 500;
  font-family: Ubuntu;
  box-sizing: border-box;
`;
const BlueRectangle = styled.div`
  width: 100%;
  position: relative;
  gap: 81px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 11px 38px;
  box-sizing: border-box;
  background-color: rgba(24, 119, 242, 0.24);
`;
const Text6 = styled.div`
  margin: 3px 0px;
  font-size: 23px;
  font-weight: 500;
  font-family: Ubuntu;
  box-sizing: border-box;
`;
const Text1 = styled.div`
  margin: 3px 5px 3px 0px;
  font-size: 23px;
  font-weight: 500;
  font-family: Ubuntu;
  box-sizing: border-box;
`;
const Text2 = styled.div`
  align-self: flex-start;
  margin: 2px 173px 4px 0px;
  font-size: 23px;
  font-weight: 500;
  font-family: Ubuntu;
  box-sizing: border-box;
`;
const Text3 = styled.div`
  margin: 3px 40px 3px 0px;
  font-size: 23px;
  font-weight: 500;
  font-family: Ubuntu;
  box-sizing: border-box;
`;
const Text4 = styled.div`
  align-self: flex-start;
  margin: 2px 29px 4px 0px;
  font-size: 23px;
  font-weight: 500;
  font-family: Ubuntu;
  box-sizing: border-box;
`;
const Text5 = styled.div`
  align-self: flex-end;
  margin: 6px 0px 0px 0px;
  font-size: 23px;
  font-weight: 500;
  font-family: Ubuntu;
  box-sizing: border-box;
`;
