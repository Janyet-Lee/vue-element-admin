<template>
  <div class="m-water-meter">
    <div class="search-container">
      <el-form :inline="true" label-position="left" label-width="80px">
        <el-form-item label="水表地址">
          <el-select placeholder="请选择" style="margin-right: 20px"></el-select>
          <el-select placeholder="请选择" style="margin-right: 20px"></el-select>
          <el-input style="width: 350px;" placeholder="请输入详细地址"></el-input>
        </el-form-item>
        <el-form-item label="水表类型">
          <el-select placeholder="请选择水表类型"></el-select>
        </el-form-item>
        <el-form-item label="用水类型">
          <el-select placeholder="请选择用水类型"></el-select>
        </el-form-item>
        <el-form-item label="户主">
          <el-input placeholder="请输入户主名"></el-input>
        </el-form-item>
        <el-form-item label="户主电话">
          <el-input placeholder="请输入户主电话"></el-input>
        </el-form-item>
        <el-form-item label="水表编号">
          <el-input placeholder="请输入水表编号"></el-input>
        </el-form-item>
      </el-form>
    </div>

    <div class="button-container">
      <el-button type="primary">导出</el-button>
      <el-button type="primary">查询</el-button>
    </div>

    <div class="table-container">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column align="center" prop="number" label="水表编号" min-width="150"></el-table-column>
        <el-table-column align="center" prop="meterType" label="水表类型" min-width="100"></el-table-column>
        <el-table-column align="center" prop="useType" label="用水类型" min-width="120"></el-table-column>
        <el-table-column align="center" prop="owner" label="户主" min-width="120"></el-table-column>
        <el-table-column align="center" prop="phone" label="户主电话" min-width="120"></el-table-column>
        <el-table-column align="center" prop="address" label="水表地址" min-width="180"></el-table-column>
        <el-table-column align="center" prop="water" label="水表读数m³" min-width="120"></el-table-column>
        <el-table-column align="center" prop="time" label="上报时间" min-width="180"></el-table-column>
        <el-table-column align="center" prop="history" label="历史读数" min-width="120"></el-table-column>
      </el-table>
    </div>

    <div class="page-container">
      <el-pagination
        layout="prev, pager, next"
        :total="1000">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          number: 'ABCD187654567',
          meterType: '小表',
          useType: '居民用水',
          owner: '户主',
          phone: '156789098762',
          address: '黄埔村创工厂210',
          water: '100',
          time: '2017年10-23 19:34',
          history: '100'
        },
        {
          number: 'ABCD187654567',
          meterType: '小表',
          useType: '居民用水',
          owner: '户主',
          phone: '156789098762',
          address: '黄埔村创工厂210',
          water: '100',
          time: '2017年10-23 19:34',
          history: '100'
        },
        {
          number: 'ABCD187654567',
          meterType: '小表',
          useType: '居民用水',
          owner: '户主',
          phone: '156789098762',
          address: '黄埔村创工厂210',
          water: '100',
          time: '2017年10-23 19:34',
          history: '100'
        },
        {
          number: 'ABCD187654567',
          meterType: '小表',
          useType: '居民用水',
          owner: '户主',
          phone: '156789098762',
          address: '黄埔村创工厂210',
          water: '100',
          time: '2017年10-23 19:34',
          history: '100'
        },
        {
          number: 'ABCD187654567',
          meterType: '小表',
          useType: '居民用水',
          owner: '户主',
          phone: '156789098762',
          address: '黄埔村创工厂210',
          water: '100',
          time: '2017年10-23 19:34',
          history: '100'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
  .m-water-meter {
    padding-left: 30px;
    padding-right: 20px;

    .button-container {
      text-align: right;
      margin-top: 20px;
      margin-bottom: 20px;
      padding-right: 25px;
      button {
        width: 95px;
      }
    }
    .search-container {
      margin-top: 20px;
      border-bottom: 1px solid #D8D8D8;

      .el-form-item {
        margin-bottom: 0px;
      }
      .el-input {
        width: 200px;
        margin-bottom: 10px;
        line-height: 0px;
      }

      .el-select {
        width: 200px;
        margin-bottom: 10px;
        line-height: 0px;
      }
    }

    .page-container {
      text-align: right;
      margin-top: 60px;
    }
  }
</style>
