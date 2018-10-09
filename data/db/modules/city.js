'use strict';
module.exports = (mongoose) => {
    const Schema = mongoose.Schema;
    const CitySchema = new Schema({
        city_name: {type: String, default: ''},                             // 城市名称
        initial: {type: String, default: ''},                             // 中文拼音首字母
        state: {type: String, default: '开通'},                             // 开通状态，枚举类型:开通/关闭
    });

    return CitySchema;
};
