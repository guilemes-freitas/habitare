import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { notification } from "antd";
import { FaTimes, FaGrinAlt } from "react-icons/fa";
import { useHabit } from "../../providers/Habit";
import { useContext } from "react";
import { AchievementContext } from "../../providers/Achievement";
import {
  InputModal,
  CardCategory,
  CardFrequency,
  CardContainer,
  WrapStars,
  ButtonForm,
  StartsInput,
  ButtonWrap,
} from "./styles";

import {
  Item,
  RadioButton,
  RadioButtonDificulty,
  RadioButtonFrequency,
  CustomText,
  DificultyItem,
} from "./RadioInput";

import filledStar from "../../assets/svg/filledStar.svg";
import emptyStar from "../../assets/svg/emptyStar.svg";
import selectedStar from "../../assets/svg/selectedStar.svg";
import Input from "../Input";

const categoriesAchievements = {
  spirit: "9",
  night: "10",
  money: "13",
  house: "18",
  focus: "23",
  fit: "26",
};
const especificAchievements = { "Regar as plantas": "20" };

const FormNewHabit = ({ habit, closeModal }) => {
  const [inputValue, setInputValue] = useState(habit.title || "");
  const [select, setSelect] = useState(habit.category || "");
  const [selectFrequency, setSelectFrequency] = useState("");
  const [selectDificulty, setSelectDificulty] = useState("");
  const { completeAchievement } = useContext(AchievementContext);

  const isCreatedHabitAchievement = (data) => {
    let achievementArray = [];
    const categoryExist = categoriesAchievements[data.category];
    const isEspecific = especificAchievements[data.title];
    !!categoryExist && achievementArray.push(categoryExist);
    !!isEspecific && achievementArray.push(isEspecific);
    achievementArray.length && completeAchievement(achievementArray);
  };

  const handleSelectChange = (event) => {
    const value = event.target.value;
    setSelect(value);
  };
  const handleSelectFrequencyChange = (event) => {
    const value = event.target.value;
    setSelectFrequency(value);
  };

  const handleSelectDificultyChange = (event) => {
    const value = event.target.value;
    setSelectDificulty(value);
  };
  const schema = yup.object().shape({
    title: yup.string().required("Todos os campos s??o obrigat??rios"),
    category: yup.string().required("Todos os campos s??o obrigat??rios"),
    frequency: yup.string().required("Todos os campos s??o obrigat??rios"),
    difficulty: yup.string().required("Todos os campos s??o obrigat??rios"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const { createHabit } = useHabit();

  const handleForm = async (data) => {
    if (errors.title) {
      notification.open({
        message: "ERRO AO CRIAR",
        closeIcon: <FaTimes />,
        style: {
          fontFamily: "Raleway",
          backgroundColor: "var(--gray)",
          WebkitBorderRadius: 14,
        },
        description:
          "Erro ao tentar criar novo h??bito, por favor rever se todos os campos est??o preenchidos!",
        icon: <FaGrinAlt style={{ color: "var(--purple)" }} />,
      });

      return;
    }
    await createHabit(data);
    isCreatedHabitAchievement(data);
    closeModal();
  };

  return (
    <>
      <form onSubmit={handleSubmit(handleForm)}>
        <InputModal>
          {!habit.title ? (
            <Input
              type="text"
              placeholder="Qual seu novo h??bito?"
              name="title"
              error={errors.title?.message}
              register={register}
            />
          ) : (
            <input
              type="text"
              placeholder="Qual seu novo h??bito?"
              {...register("title", { value: inputValue })}
              required
            />
          )}
        </InputModal>

        <p>Em qual categoria seu h??bito se encaixa?</p>
        <CardContainer>
          <Item onChange={(event) => handleSelectChange(event)}>
            <RadioButton
              type="radio"
              name="radio"
              value="spirit"
              checked={select === "spirit"}
              {...register("category")}
              color="var(--colorSpirit)"
              required
            />
            <CardCategory color="var(--colorSpirit)">
              <CustomText color="var(--colorSpirit)">
                Corpo e mente saud??veis
              </CustomText>
            </CardCategory>
          </Item>

          <Item onChange={(event) => handleSelectChange(event)}>
            <RadioButton
              type="radio"
              name="radio"
              value="fit"
              checked={select === "fit"}
              {...register("category")}
              color="var(--colorFit)"
              required
            />
            <CardCategory color="var(--colorFit)">
              <CustomText color="var(--colorFit)">Ficando em forma</CustomText>
            </CardCategory>
          </Item>

          <Item onChange={(event) => handleSelectChange(event)}>
            <RadioButton
              type="radio"
              name="radio"
              value="focus"
              checked={select === "focus"}
              {...register("category")}
              color="var(--colorFocus)"
              required
            />
            <CardCategory color="var(--colorFocus)">
              <CustomText color="var(--colorFocus)">
                Foco, for??a e f??
              </CustomText>
            </CardCategory>
          </Item>

          <Item onChange={(event) => handleSelectChange(event)}>
            <RadioButton
              type="radio"
              name="radio"
              value="money"
              checked={select === "money"}
              {...register("category")}
              color="var(--colorMoney)"
              required
            />
            <CardCategory color="var(--colorMoney)">
              <CustomText color="var(--colorMoney)">Me poupe</CustomText>
            </CardCategory>
          </Item>

          <Item onChange={(event) => handleSelectChange(event)}>
            <RadioButton
              type="radio"
              name="radio"
              value="house"
              checked={select === "house"}
              {...register("category")}
              color="var(--colorHouse)"
              required
            />
            <CardCategory color="var(--colorHouse)">
              <CustomText color="var(--colorHouse)">Lar doce lar</CustomText>
            </CardCategory>
          </Item>

          <Item onChange={(event) => handleSelectChange(event)}>
            <RadioButton
              type="radio"
              name="radio"
              value="night"
              checked={select === "night"}
              {...register("category")}
              color="var(--colorNight)"
              required
            />
            <CardCategory color="var(--colorNight)">
              <CustomText color="var(--colorNight)">Boa noite</CustomText>
            </CardCategory>
          </Item>
        </CardContainer>

        <p>Com qual frequ??ncia?</p>
        <div className="wrap">
          <Item onClick={(event) => handleSelectFrequencyChange(event)}>
            <RadioButtonFrequency
              type="radio"
              name="radio"
              value="di??rio"
              checked={selectFrequency === "di??rio"}
              {...register("frequency")}
              required
            />
            <CardFrequency>
              <CustomText>Di??rio</CustomText>
            </CardFrequency>
          </Item>

          <Item onChange={(event) => handleSelectFrequencyChange(event)}>
            <RadioButtonFrequency
              type="radio"
              name="radio"
              value="semanal"
              checked={selectFrequency === "semanal"}
              {...register("frequency")}
              required
            />
            <CardFrequency>
              <CustomText>Semanal</CustomText>
            </CardFrequency>
          </Item>
          <Item onChange={(event) => handleSelectFrequencyChange(event)}>
            <RadioButtonFrequency
              type="radio"
              name="radio"
              value="quinzenal"
              checked={selectFrequency === "quinzenal"}
              {...register("frequency")}
              required
            />
            <CardFrequency>
              <CustomText>Quinzenal</CustomText>
            </CardFrequency>
          </Item>
          <Item onChange={(event) => handleSelectFrequencyChange(event)}>
            <RadioButtonFrequency
              type="radio"
              name="radio"
              value="mensal"
              checked={selectFrequency === "mensal"}
              {...register("frequency")}
              required
            />
            <CardFrequency>
              <CustomText>Mensal</CustomText>
            </CardFrequency>
          </Item>
        </div>
        <p>O quanto ?? dif??cil para voc?? manter esse h??bito?</p>
        <WrapStars>
          <DificultyItem
            onChange={(event) => handleSelectDificultyChange(event)}
          >
            <RadioButtonDificulty
              type="radio"
              name="radio"
              value="1"
              checked={selectDificulty === "1"}
              {...register("difficulty")}
              required
            />

            {selectDificulty === "1" && (
              <StartsInput src={selectedStar} alt="filled star" />
            )}
            {selectDificulty === "2" && (
              <StartsInput src={filledStar} alt="filled star" />
            )}
            {selectDificulty === "3" && (
              <StartsInput src={filledStar} alt="filled star" />
            )}
            {selectDificulty === "1" && <p>F??cil</p>}
          </DificultyItem>

          <DificultyItem
            onChange={(event) => handleSelectDificultyChange(event)}
          >
            <RadioButtonDificulty
              type="radio"
              name="radio"
              value="2"
              checked={selectDificulty === "2"}
              {...register("difficulty")}
              required
            />
            {selectDificulty === "1" && (
              <StartsInput src={emptyStar} alt="filled star" />
            )}
            {selectDificulty === "2" && (
              <StartsInput src={selectedStar} alt="filled star" />
            )}
            {selectDificulty === "3" && (
              <StartsInput src={filledStar} alt="filled star" />
            )}
            {selectDificulty === "2" && <p className="medio">M??dio</p>}
          </DificultyItem>

          <DificultyItem
            onChange={(event) => handleSelectDificultyChange(event)}
          >
            <RadioButtonDificulty
              type="radio"
              name="radio"
              value="3"
              checked={selectDificulty === "3"}
              {...register("difficulty")}
              required
            />
            {selectDificulty === "1" && (
              <StartsInput src={emptyStar} alt="filled star" />
            )}
            {selectDificulty === "2" && (
              <StartsInput src={emptyStar} alt="filled star" />
            )}
            {selectDificulty === "3" && (
              <StartsInput src={selectedStar} alt="filled star" />
            )}
            {selectDificulty === "3" && <p>Dif??cil</p>}
          </DificultyItem>
        </WrapStars>
        <ButtonWrap>
          <ButtonForm>Criar</ButtonForm>
        </ButtonWrap>
      </form>
    </>
  );
};

export default FormNewHabit;
