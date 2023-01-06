import { DataTypes } from "sequelize";
import { Migration } from "../umzug";

export const up: Migration = async ({ context: sequelize }) => {
  await sequelize.addColumn('question_answer', 'account_id', {
    type: DataTypes.INTEGER  
  });
  await sequelize.addColumn('question_answer', 'category_id', {
    type: DataTypes.INTEGER  
  });
};

export const down: Migration = async ({ context: sequelize }) => {
  await sequelize.removeColumn('question_answer', 'account_id');
  await sequelize.removeColumn('question_answer', 'category_id');
};