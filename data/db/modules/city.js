'use strict';
//关系数据，以type区分不同类型
module.exports = (mongoose) => {

    const Schema = mongoose.Schema;
    const CitySchema = new Schema({
        city_name: {type: String, default: ''},                             // 城市名称
        initial: {type: String, default: ''},                             // 中文拼音首字母
        state: {type: String, default: '开通'},                             // 开通状态，枚举类型:开通/关闭
        recommend_index: {type: Number, default: 0},                             // 推荐值
        delete: {type: Boolean, default: false},                             //是否已删除
        latitude: {type: Number, default: 0},                  //经度
        longitude: {type: Number, default: 0},                  //纬度
        create_time: {type: Date, default: Date.now},                        // 创建时间
    });

    return CitySchema;
};
