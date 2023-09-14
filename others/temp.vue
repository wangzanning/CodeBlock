<template>
  <u-linear-layout ref="uLinearLayout1" style="height:100%; --custom-start: auto; min-height: 200px;" type="root"
                   gap="none">
    <u-router-view ref="router_view1"></u-router-view>
    <u-linear-layout ref="linear_layout2" direction="horizontal">
      <u-panel ref="panel4" title="">
        <u-linear-layout ref="linear_layout14" direction="horizontal"></u-linear-layout>
        <u-linear-layout ref="linear_layout18" direction="horizontal">
          <u-form ref="form1" :repeat="3" label-size="large" layout="block">
            <u-form-item ref="form_item28"
                         style="border-width:0 0 1px 0;border-style:solid;padding:0 16px 10px 0;border-color:#3491FA;margin:0 0 16px 0;"
                         label="" span="3" :label-ellipsis="false">
              <template #label ref="template15"></template>
              <u-text ref="text3" style="font-weight:bold;margin:0 0 0 -140px;color:#3491FA;" size="large"
                      text="基础信息"></u-text>
            </u-form-item>
            <u-form-item ref="form_item35" style=" --custom-start: auto; --form-required-right-large: 110px"
                         label="公司注册名称"
                         :rules="[{validate: 'filled',message: `公司注册名称不得为空`,trigger: 'input+blur',required: true} , 'maxLength(200)']"
                         :required="true" field-size="full" :ignore-validation="false">
              <u-input ref="input23" style="width:100%;" placeholder="请输入公司名称"
                       :value.sync="neteaselawCompany.companyName"
                       :disabled="(((companyName) != (true)) || ((manuallyCreate) == (false))) && ((((userPermissions || {}).data || {}).admin) != (true))"
                       :readonly="false"></u-input>
            </u-form-item>
            <u-form-item ref="form_item18" label="中文名称"
                         :rules="[{validate: 'maxLength',args: [100] ,message: `不得超过${100}个字符`,trigger: 'input+blur'}]"
                         :required="false" span="1" label-size="large" field-size="full">
              <u-input ref="input12" style="width:100%;" placeholder="请输入"
                       :value.sync="neteaselawCompany.chineseName" :disabled="(chineseName1) != (true)"></u-input>
            </u-form-item>
            <u-form-item ref="form_item17" label="英文名称"
                         :rules="[{validate: 'maxLength',args: [100] ,message: `不得超过${100}个字符`,trigger: 'input+blur'}]"
                         :required="false" span="1" label-size="large" field-size="full">
              <u-input ref="input5" style="width:100%;" placeholder="请输入" :value.sync="neteaselawCompany.englishName"
                       :disabled="(englishName) != (true)"></u-input>
            </u-form-item>
            <u-form-item ref="form_item13" label="财务编码"
                         :rules="[{validate: 'maxLength',args: [100] ,message: `不得超过${100}个字符`,trigger: 'input+blur'}]"
                         :required="false" span="1" label-size="large" field-size="full"
                         :ignore-validation="(((userPermissions || {}).data || {}).admin) == (true)">
              <u-input ref="input4" style="width:100%;" placeholder="请输入财务编码"
                       :value.sync="neteaselawCompany.companyFinancialCode"
                       :disabled="(((companyFinancialCode) != (true)) || ((manuallyCreate) != (true))) && ((((userPermissions || {}).data || {}).admin) != (true))"></u-input>
            </u-form-item>
            <u-form-item ref="form_item3" style=" --custom-start: auto; --form-required-right-large: 80px"
                         label="公司性质"
                         :rules="[{validate: 'filled',message: `公司性质不得为空`,trigger: 'input+blur',required: true} , 'maxLength(100)']"
                         :required="(manuallyCreate) != (true)"
                         :ignore-validation="(((companyAttribute) != (true)) || ((manuallyCreate) == (true))) || ((((userPermissions || {}).data || {}).admin) == (true))"
                         field-size="full">
              <u-select ref="select3" style="width:100%;" :clearable="false" placeholder="请选择"
                        :value.sync="neteaselawCompany.companyAttribute" :disabled="(companyAttribute) != (true)">
                <u-select-group ref="select_group1" title="境外啊啊啊啊啊">
                  <template #title ref="template1">
                    <u-text ref="text1" text="境外"></u-text>
                  </template>
                  <u-select-item ref="select_item3" text="" :value="'11'">
                    <u-text ref="text2" text="上市主体"></u-text>
                  </u-select-item>
                  <u-select-item ref="select_item4" text="" :value="'12'">
                    <u-text ref="text6" text="离岸公司"></u-text>
                  </u-select-item>
                </u-select-group>
                <u-select-group ref="select_group2">
                  <template #title ref="template2">
                    <u-text ref="text8" text="境内"></u-text>
                  </template>
                  <u-select-item ref="select_item6" text="其他" :value="'21'">
                    <u-text ref="text9" text="VIE主体"></u-text>
                  </u-select-item>
                  <u-select-item ref="select_item8" :value="'22'">
                    <u-text ref="text10" text="WFOE公司"></u-text>
                  </u-select-item>
                  <u-select-item ref="select_item13" :value="'23'">
                    <u-text ref="text12" text="WFOE子公司"></u-text>
                  </u-select-item>
                  <u-select-item ref="select_item11" :value="'24'">
                    <u-text ref="text11" text="分公司"></u-text>
                  </u-select-item>
                  <u-select-item ref="select_item9" :value="'25'">
                    <u-text ref="text7" text="其他"></u-text>
                  </u-select-item>
                </u-select-group>
              </u-select>
            </u-form-item>
            <u-form-item ref="form_item4" style=" --custom-start: auto; --form-required-right-large: 80px;"
                         :rules="[{validate: 'filled',message: `控制主体不得为空`,trigger: 'input+blur',required: true} , 'maxLength(1200)']"
                         :required="(((neteaselawCompany || {}).companyAttribute) == ('21')) || ((manuallyCreate) != (true))"
                         :ignore-validation="(((controllingSubject) != (true)) || (((neteaselawCompany || {}).companyAttribute) != ('21'))) || ((((userPermissions || {}).data || {}).admin) == (true))"
                         field-size="full" label="控制主体"
                         v-if="((neteaselawCompany || {}).companyAttribute) == ('21')">
              <u-select ref="select9" style="width:100%;" clearable="" placeholder="请选择" :data-source="loadSelect1"
                        data-schema="LoadCompanySelect1Structure"
                        text-field="neteaselawCompany.companyName" value-field="neteaselawCompany.companyName"
                        :pageable="true" :remote-paging="true"
                        :value.sync="neteaselawCompany.controllingSubject" :filterable="true" :remote-filtering="true"
                        :disabled="(controllingSubject) != (true)"
                        append-to="body"></u-select>
            </u-form-item>
            <u-form-item ref="form_item9" style=" --custom-start: auto; display:none;" :rules="[]" :required="true"
                         :ignore-validation="false" field-size="full"
                         label="控制主体" v-if="((neteaselawCompany || {}).companyAttribute) != ('21')"></u-form-item>
            <u-form-item ref="form_item29" style=" --custom-start: auto; --form-required-right-large: 80px"
                         label="总公司"
                         :rules="[{validate: 'filled',message: `总公司不得为空`,trigger: 'input+blur',required: true} , 'maxLength(1200)']"
                         :required="(((neteaselawCompany || {}).companyAttribute) == ('24')) || ((manuallyCreate) != (true))"
                         :ignore-validation="(((headOffice) != (true)) || (((neteaselawCompany || {}).companyAttribute) != ('24'))) || ((((userPermissions || {}).data || {}).admin) == (true))"
                         field-size="full" v-if="((neteaselawCompany || {}).companyAttribute) == ('24')">
              <u-select ref="select1" style="width:100%;" clearable="" placeholder="请选择" :data-source="loadSelect1"
                        data-schema="LoadCompanySelect1Structure"
                        text-field="neteaselawCompany.companyName" value-field="neteaselawCompany.companyName"
                        :pageable="true" :remote-paging="true"
                        :value.sync="neteaselawCompany.headOffice" :filterable="true" :remote-filtering="true"
                        :disabled="(headOffice) != (true)"></u-select>
            </u-form-item>
            <u-form-item ref="form_item11" style=" --custom-start: auto; display:none;" label="总公司" :rules="[]"
                         :required="true" :ignore-validation="false"
                         field-size="full" v-if="((neteaselawCompany || {}).companyAttribute) != ('24')"></u-form-item>
            <u-form-item ref="form_item31" style=" --custom-start: auto; --form-required-right-large: 80px"
                         label="所属BU"
                         :rules="[{validate: 'filled',message: `所属BU不得为空`,trigger: 'input+blur',required: true} , 'maxLength(1200)']"
                         :required="(manuallyCreate) != (true)"
                         :ignore-validation="(((businessFirstOrg) != (true)) || ((manuallyCreate) == (true))) || ((((userPermissions || {}).data || {}).admin) == (true))"
                         field-size="full">
              <u-select ref="select16" style="width:100%;" placeholder="请选择" :data-source="getBuList"
                        text-field="name" value-field="code" :value.sync="neteaselawCompany.businessFirstOrg"
                        :filterable="true" :remote-filtering="true" :disabled="(businessFirstOrg) != (true)"></u-select>
            </u-form-item>
            <u-form-item ref="form_item24" style=" --custom-start: auto; --form-required-right-large: 110px"
                         label="公司成立日期"
                         :rules="[{validate: 'filled',message: `公司成立日期不得为空`,trigger: 'input+blur',required: true}]"
                         :ignore-validation="(((dateOfIncorporation) != (true)) || ((manuallyCreate) == (true))) || ((((userPermissions || {}).data || {}).admin) == (true))"
                         :required="(manuallyCreate) != (true)" label-size="large" field-size="full">
              <u-date-picker ref="date_picker3" style="width:100%;" :date.sync="companyDateOfEstablishment"
                             :disabled="(dateOfIncorporation) != (true)" :yearDiff="50"
                             :yearAdd="50"></u-date-picker>
            </u-form-item>
            <u-form-item ref="form_item6" style=" --custom-start: auto; --form-required-right-large: 80px"
                         label="公司状态"
                         :rules="[{validate: 'filled',message: `公司状态不得为空`,trigger: 'input+blur',required: true} , 'maxLength(50)']"
                         :required="(manuallyCreate) != (true)"
                         :ignore-validation="(((companyStatus) != (true)) || ((manuallyCreate) == (true))) || ((((userPermissions || {}).data || {}).admin) == (true))"
                         field-size="full">
              <u-select ref="select2" style="width:100%;" :clearable="false" placeholder="请选择"
                        :data-source="$utils['EnumToList']({'concept':'TypeAnnotation','name':'','typeKind':'reference','typeNamespace':'app.enums','typeName':'CompanyStatus','typeArguments':null,'returnType':null,'properties':null})"
                        :value.sync="neteaselawCompany.companyStatus" :disabled="(companyStatus) != (true)"></u-select>
            </u-form-item>
            <u-form-item ref="form_item27" style=" --custom-start: auto; --form-required-right-large: 90px"
                         label="公司注册地"
                         :rules="[{validate: 'filled',message: `公司注册地不得为空`,trigger: 'input+blur',required: true} , 'maxLength(1200)']"
                         span="3" :required="(manuallyCreate) != (true)"
                         :ignore-validation="(((companyCountry) != (true)) || ((manuallyCreate) == (true))) || ((((userPermissions || {}).data || {}).admin) == (true))">
              <u-select ref="select5" placeholder="请选择" :value.sync="neteaselawCompany.companyCountry"
                        :empty-disabled="false" :disabled="(companyCountry) != (true)"
                        @select="select5_select($event)">
                <u-select-item ref="select_item1" :value="'BVI/英属维尔京群岛'">
                  <u-text ref="text13" :text="'BVI/英属维尔京群岛'"></u-text>
                </u-select-item>
                <u-select-item ref="select_item2" :value="'开曼'">
                  <u-text ref="text15" text="开曼"></u-text>
                </u-select-item>
                <u-select-item ref="select_item5" :value="'意大利'">
                  <u-text ref="text16" text="意大利"></u-text>
                </u-select-item>
                <u-select-item ref="select_item7" :value="'古巴'">
                  <u-text ref="text17" text="古巴"></u-text>
                </u-select-item>
                <u-select-item ref="select_item12" :value="'墨西哥'">
                  <u-text ref="text18" text="墨西哥"></u-text>
                </u-select-item>
                <u-select-item ref="select_item15" :value="'乌克兰'">
                  <u-text ref="text19" text="乌克兰"></u-text>
                </u-select-item>
                <u-select-item ref="select_item17" :value="'奥地利'">
                  <u-text ref="text20" text="奥地利"></u-text>
                </u-select-item>
                <u-select-item ref="select_item19" :value="'卢森堡'">
                  <u-text ref="text21" text="卢森堡"></u-text>
                </u-select-item>
                <u-select-item ref="select_item21" :value="'比利时'">
                  <u-text ref="text22" text="比利时"></u-text>
                </u-select-item>
                <u-select-item ref="select_item23" :value="'荷兰'">
                  <u-text ref="text23" text="荷兰"></u-text>
                </u-select-item>
                <u-select-item ref="select_item25" :value="'爱尔兰'">
                  <u-text ref="text24" text="爱尔兰"></u-text>
                </u-select-item>
                <u-select-item ref="select_item27" :value="'挪威'">
                  <u-text ref="text25" text="挪威"></u-text>
                </u-select-item>
                <u-select-item ref="select_item29" :value="'芬兰'">
                  <u-text ref="text26" text="芬兰"></u-text>
                </u-select-item>
                <u-select-item ref="select_item31" :value="'泰国'">
                  <u-text ref="text27" text="泰国"></u-text>
                </u-select-item>
                <u-select-item ref="select_item33" :value="'印度'">
                  <u-text ref="text28" text="印度"></u-text>
                </u-select-item>
                <u-select-item ref="select_item35" :value="'印度尼西亚'">
                  <u-text ref="text29" text="印度尼西亚"></u-text>
                </u-select-item>
                <u-select-item ref="select_item37" :value="'美国'">
                  <u-text ref="text30" text="美国"></u-text>
                </u-select-item>
                <u-select-item ref="select_item39" :value="'马来西亚'">
                  <u-text ref="text31" text="马来西亚"></u-text>
                </u-select-item>
                <u-select-item ref="select_item41" :value="'新加坡'">
                  <u-text ref="text32" text="新加坡"></u-text>
                </u-select-item>
                <u-select-item ref="select_item43" :value="'加拿大'">
                  <u-text ref="text33" text="加拿大"></u-text>
                </u-select-item>
                <u-select-item ref="select_item45" :value="'德国'">
                  <u-text ref="text34" text="德国"></u-text>
                </u-select-item>
                <u-select-item ref="select_item47" :value="'法国'">
                  <u-text ref="text35" text="法国"></u-text>
                </u-select-item>
                <u-select-item ref="select_item49" :value="'英国'">
                  <u-text ref="text36" text="英国"></u-text>
                </u-select-item>
                <u-select-item ref="select_item51" :value="'菲律宾'">
                  <u-text ref="text37" text="菲律宾"></u-text>
                </u-select-item>
                <u-select-item ref="select_item55" :value="'韩国'">
                  <u-text ref="text39" text="韩国"></u-text>
                </u-select-item>
                <u-select-item ref="select_item53" :value="'日本'">
                  <u-text ref="text38" text="日本"></u-text>
                </u-select-item>
                <u-select-item ref="select_item59" :value="'俄罗斯'">
                  <u-text ref="text41" text="俄罗斯"></u-text>
                </u-select-item>
                <u-select-item ref="select_item57" :value="'中国'">
                  <u-text ref="text40" text="中国"></u-text>
                </u-select-item>
              </u-select>
              <u-region-select ref="region_select3" :value.sync="neteaselawCompany.companyAddress"
                               :disabled="(companyCountry) != (true)" :opened="false"
                               v-if="((neteaselawCompany || {}).companyCountry) == ('中国')"></u-region-select>
              <u-input ref="input7" placeholder="请输入详细地址" :value.sync="neteaselawCompany.companyAddressDetails"
                       :disabled="(companyCountry) != (true)"></u-input>
            </u-form-item>
            <u-form-item ref="form_item5" label="" :rules="['maxLength(50)']" span="3" field-size="full">
              <u-linear-layout ref="linear_layout9" direction="horizontal">
                <u-grid-layout ref="grid_layout3">
                  <u-grid-layout-row ref="grid_layout_row3" :repeat="24" justify="space-between">
                    <u-grid-layout-column ref="grid_layout_column7" :span="17.5">
                      <u-linear-layout ref="linear_layout3" style="width:100%;" direction="vertical">
                        <u-table-view ref="tableView"
                                      style="width:100%; --custom-start: auto; --table-border-color: none;"
                                      :data-source="listNeteaselawShareholder"
                                      data-schema="LoadCompanyTableViewStructure" value-field="neteaselawShareholder.id"
                                      :pageable="false" :remote-paging="true" :show-sizer="false"
                                      :page-size="50" :show-head="true" :boldHeader="true" :show-jumper="false"
                                      :show-total="false" :initial-load="false">
                          <u-table-view-column ref="table_view_column4" field="neteaselawShareholder.shareholder"
                                               :width="120">
                            <template #cell="current" ref="template10">
                              <u-linear-layout ref="linear_layout10" gap="small">
                                <u-select ref="select17" style="width:120px;" :clearable="false"
                                          placeholder="请选择股东类型"
                                          :data-source="$utils['EnumToList']({'concept':'TypeAnnotation','name':'','typeKind':'reference','typeNamespace':'app.enums','typeName':'Shareholder','typeArguments':null,'returnType':null,'properties':null})"
                                          :value.sync="current.item.shareholder" append-to="body"
                                          :disabled="(shareholder1) != (true)"
                                          @change="select17_change($event, current)"
                                          @select="select17_select($event, current)"></u-select>
                              </u-linear-layout>
                            </template>
                            <template #title ref="template11">
                              <u-text ref="text52" text="股东"></u-text>
                            </template>
                          </u-table-view-column>
                          <u-table-view-column ref="table_view_column5" field="neteaselawShareholder.shareholderName"
                                               :width="200">
                            <template #cell="current" ref="template12">
                              <u-linear-layout ref="linear_layout11" gap="small">
                                <u-select ref="select11" :clearable="false" placeholder="请选择公司"
                                          :data-source="loadSelect11" data-schema="LoadCompanySelect11Structure"
                                          text-field="neteaselawCompany.companyName"
                                          value-field="neteaselawCompany.companyName" :pageable="true"
                                          :remote-paging="true"
                                          :value.sync="current.item.shareholderName" append-to="body"
                                          :disabled="(shareholder1) != (true)" :filterable="true"
                                          :remote-filtering="true"
                                          @select="select11_select($event, current)"
                                          v-if="(((current || {}).item || {}).shareholder) == ('0')"></u-select>
                              </u-linear-layout>
                              <u-linear-layout ref="linear_layout35" gap="small">
                                <u-select ref="select7" placeholder="请选择内部自然人股东"
                                          :value.sync="current.item.shareholderNameEmail.shareholderNameEmail"
                                          :data-source="user13"
                                          value-field="account" text-field="userName" :initial-load="false"
                                          :filterable="true" :remote-filtering="true"
                                          :disabled="(shareholder1) != (true)"
                                          append-to="body"
                                          :selected-values-data="(((current || {}).item || {}).shareholderNameEmail || {}).initSelectList"
                                          empty-text=""
                                          @select="select7_select($event, current)"
                                          @before-filter="select7_beforefilter($event, current)"
                                          v-if="(((current || {}).item || {}).shareholder) == ('1')"></u-select>
                                <u-button ref="button8" style="width:50px;" text="其他" size="mini" shape="circle"
                                          :disabled="(shareholder1) != (true)" @click="button8_click($event, current)"
                                          v-if="(((current || {}).item || {}).shareholder) == ('1')"></u-button>
                                <u-input ref="input11" placeholder="请输入" :value.sync="current.item.userDefined"
                                         :disabled="(shareholder1) != (true)" @blur="input11_blur($event, current)"
                                         v-if="(((((current || {}).item || {}).shareholderNameEmail || {}).shareholderNameEmail) == ('其他')) || ((((current || {}).item || {}).shareholder) == ('2'))"></u-input>
                              </u-linear-layout>
                            </template>
                            <template #title ref="template13"></template>
                          </u-table-view-column>
                          <u-table-view-column ref="table_view_column6" field="neteaselawShareholder.shareholderName"
                                               :width="110">
                            <template #cell="current" ref="template5">
                              <u-linear-layout ref="linear_layout13" gap="small">
                                <u-number-input ref="number_input5" style="width:60px;"
                                                :value.sync="current.item.shareholdingRatio" :precision="0.01"
                                                :hide-buttons="true" :disabled="(shareholder1) != (true)"
                                                :min="0" @change="number_input5_change($event, current)"
                                                @blur="number_input5_blur($event, current)"></u-number-input>
                                <u-text ref="text48" text="%"></u-text>
                              </u-linear-layout>
                            </template>
                            <template #title ref="template6">
                              <u-text ref="text46" text="股东持股比例"></u-text>
                            </template>
                          </u-table-view-column>
                          <u-table-view-column ref="table_view_column11" field="neteaselawShareholder.shareholderName"
                                               :width="80">
                            <template #cell="current" ref="template21">
                              <u-linear-layout ref="linear_layout1" style="padding:0px 0 0 0;" gap="small">
                                <i-ico ref="ico4" style="width:28px;height:35px;position:relative;left:0px;top:5px; --custom-start: auto; font-size:20px;
cursor:pointer"
                                       name="https://lcpapp-static.nos-eastchina1.126.net/user/defaulttenant/1677833182704_%E5%87%8F%E5%B0%91.svg"
                                       icotype="only"
                                       @click="ico4_click($event, current)" v-if="(shareholder1) == (true)"></i-ico>
                              </u-linear-layout>
                            </template>
                            <template #title ref="template22"></template>
                          </u-table-view-column>
                        </u-table-view>
                      </u-linear-layout>
                    </u-grid-layout-column>
                    <u-grid-layout-column ref="grid_layout_column9" style="padding:0px 0 0 0;" :span="5">
                      <u-linear-layout ref="linear_layout15" direction="vertical">
                        <u-linear-layout ref="linear_layout17">
                          <u-button ref="button3"
                                    style="margin:0 0 20px 0;position:relative;left:90px;top:0px;--button-padding-x:20px; --custom-start: auto; min-width:78px;"
                                    color="default" text="+添加" :disabled="(shareholder1) != (true)"
                                    @click="button3_click($event)"></u-button>
                        </u-linear-layout>
                        <u-linear-layout ref="linear_layout19">
                          <u-text ref="text59" style="font-weight:bold;color:#ff0000;width:140px;"
                                  text="股东所有内容都需必填" v-if="(judgeNeteaselawShareholder) == (true)"></u-text>
                        </u-linear-layout>
                        <u-linear-layout ref="linear_layout8">
                          <u-text ref="text50"
                                  style="width:auto;height:auto;color:#ff0000;font-weight:bold;position:relative;left:10px;top:0px;margin-left:-50px;"
                                  text="持股比例多条相加，需等于100%" size="normal"
                                  v-if="(sumshareholdingRatio) == (true)"></u-text>
                        </u-linear-layout>
                      </u-linear-layout>
                    </u-grid-layout-column>
                  </u-grid-layout-row>
                </u-grid-layout>
              </u-linear-layout>
            </u-form-item>
            <u-form-item ref="form_item45" style=" --custom-start: auto; --form-required-right-large: 80px"
                         label="注册资本"
                         :rules="[{validate: 'filled',message: `注册资本不得为空`,trigger: 'input+blur',required: true}]"
                         :required="(manuallyCreate) != (true)" span="3"
                         :ignore-validation="(((registeredCapital) != (true)) || ((manuallyCreate) == (true))) || ((((userPermissions || {}).data || {}).admin) == (true))">
              <u-number-input ref="number_input2" :value.sync="registered" :hide-buttons="true" placeholder="请输入"
                              :disabled="(registeredCapital) != (true)"
                              min=""></u-number-input>
              <u-select ref="select10" style="width:100px;" :clearable="false" placeholder="请选择"
                        :data-source="loadSelect" data-schema="LoadCompanySelectStructure"
                        text-field="neteaselawCurrency.currencyCode" value-field="neteaselawCurrency.currencyCode"
                        :pageable="true" :remote-paging="true"
                        :value.sync="neteaselawCompany.registeredCapitalCurrency" :filterable="true"
                        :remote-filtering="true" :disabled="(registeredCapital) != (true)"
                        @select="select10_select($event)" @close="select10_close($event)"></u-select>
              <u-number-input ref="number_input8" :value.sync="registeredCNY" :hide-buttons="true"
                              placeholder="请输入转换人民币金额" :disabled="(registeredCapital) != (true)"
                              min=""
                              v-if="(((neteaselawCompany || {}).registeredCapitalCurrency) != ('CNY')) && ((registered) != (undefined))"></u-number-input>
              <u-text ref="text68" style="margin:0 0 0 5px;" size="normal" text="CNY"
                      v-if="((neteaselawCompany || {}).registeredCapitalCurrency) != ('CNY')"></u-text>
            </u-form-item>
            <u-form-item ref="form_item46" style=" --custom-start: auto; --form-required-right-large: 120px"
                         label="BU法务负责人"
                         :rules="[{validate: 'filled',message: `BU法务负责人不得为空`,trigger: 'input+blur',required: true} , 'maxLength(50)']"
                         :required="(manuallyCreate) != (true)"
                         :ignore-validation="(((legalPerson) != (true)) || ((manuallyCreate) == (true))) || ((((userPermissions || {}).data || {}).admin) == (true))"
                         field-size="full">
              <u-select ref="select21" style="width:100%;margin-top:0px;" placeholder="请选择"
                        :value.sync="neteaselawCompany.legalPerson" :data-source="user11"
                        value-field="account" text-field="userName" :initial-load="false" :filterable="true"
                        :remote-filtering="true" :disabled="(legalPerson) != (true)"
                        empty-text="" selected-values-data="" @before-filter="select21_beforefilter($event)"></u-select>
            </u-form-item>
            <u-form-item ref="form_item20" style=" --custom-start: auto; --form-required-right-large: 90px"
                         label="法定代表人" :rules="['maxLength(50)']"
                         :required="false"
                         :ignore-validation="((((legalRepresentative) != (true)) || ((manuallyCreate) == (true))) || ((((userPermissions || {}).data || {}).admin) == (true))) || ((filialePerson) == (true))"
                         field-size="full">
              <u-input ref="input1" style="width:100%;" placeholder="请输入"
                       :value.sync="neteaselawCompany.legalRepresentative"
                       :disabled="(legalRepresentative) != (true)"></u-input>
              <u-select ref="select15" style="width:100%; --custom-start: auto; display: none;" placeholder="请选择"
                        :value.sync="neteaselawCompany.legalRepresentative"
                        :data-source="user12" value-field="account" text-field="userName" :initial-load="false"
                        :filterable="true" :remote-filtering="true"
                        :disabled="(legalRepresentative) != (true)" empty-text=""
                        @before-filter="select15_beforefilter($event)"></u-select>
            </u-form-item>
            <u-form-item ref="form_item25" style=" --custom-start: auto; --form-required-right-large: 90px"
                         label="分公司负责人" :rules="['maxLength(50)']"
                         :required="false" :ignore-validation="false" field-size="full">
              <u-input ref="input10" placeholder="请输入" :value.sync="neteaselawCompany.filialePerson"
                       :disabled="(filialePerson2) != (true)"></u-input>
            </u-form-item>
            <u-form-item ref="form_item52" label="统一社会信用代码" :rules="['maxLength(50)']" :required="false"
                         :ignore-validation="false" field-size="full"
                         v-if="(((neteaselawCompany || {}).companyAttribute) == ('21')) || ((((neteaselawCompany || {}).companyAttribute) == ('22')) || ((((neteaselawCompany || {}).companyAttribute) == ('23')) || ((((neteaselawCompany || {}).companyAttribute) == ('24')) || (((neteaselawCompany || {}).companyAttribute) == ('25')))))">
              <u-input ref="input22" style="width:100%;" placeholder="请输入"
                       :value.sync="neteaselawCompany.unifiedSocialCreditCodes"
                       :disabled="(unifiedSocialCreditCodes) != (true)"></u-input>
            </u-form-item>
            <u-form-item ref="form_item12" label="商业登记号"
                         :rules="[{validate: 'maxLength',args: [255] ,message: `不得超过${255}个字符`,trigger: 'input+blur'}]"
                         :required="false" :ignore-validation="false" field-size="full"
                         v-if="(((neteaselawCompany || {}).companyAttribute) == ('11')) || (((neteaselawCompany || {}).companyAttribute) == ('12'))">
              <u-input ref="input2" style="width:100%;" placeholder="请输入"
                       :value.sync="neteaselawCompany.businessNumber"
                       :disabled="(unifiedSocialCreditCodes) != (true)"></u-input>
            </u-form-item>
            <u-form-item ref="form_item21" label="董事会/执行董事"
                         :rules="[{validate: 'maxLength',args: [100] ,message: `不得超过${100}个字符`,trigger: 'input+blur'}]"
                         field-size="full">
              <u-input ref="input15" style="width:100%;" placeholder="请输入董事会/执行董事"
                       :value.sync="neteaselawCompany.executiveCommittee"
                       :disabled="(executiveCommittee) != (true)"></u-input>
            </u-form-item>
            <u-form-item ref="form_item22" label="(总)经理"
                         :rules="[{validate: 'maxLength',args: [100] ,message: `不得超过${100}个字符`,trigger: 'input+blur'}]"
                         field-size="full">
              <u-input ref="input16" style="width:100%;" placeholder="请输入(总)经理"
                       :value.sync="neteaselawCompany.president" :disabled="(president) != (true)"></u-input>
            </u-form-item>
            <u-form-item ref="form_item23" label="监事"
                         :rules="[{validate: 'maxLength',args: [100] ,message: `不得超过${100}个字符`,trigger: 'input+blur'}]"
                         field-size="full">
              <u-input ref="input17" style="width:100%;" placeholder="请输入监事"
                       :value.sync="neteaselawCompany.supervisor" :disabled="(supervisor) != (true)"></u-input>
            </u-form-item>
            <u-form-item ref="form_item14" style=" --custom-start: auto; --form-required-right-large: 90px"
                         label="承载业务"
                         :rules="[{validate: 'filled',message: `承载业务不得为空`,trigger: 'input+blur',required: true} , {validate: 'maxLength',args: [100] ,message: `不得超过${100}个字符`,trigger: 'input+blur'}]"
                         field-size="full"
                         :ignore-validation="(((bearerService) != (true)) || ((manuallyCreate) == (true))) || ((((userPermissions || {}).data || {}).admin) == (true))"
                         :required="(manuallyCreate) != (true)">
              <u-input ref="input9" style="width:100%;" placeholder="请输入"
                       :value.sync="neteaselawCompany.bearerService" :disabled="(bearerService) != (true)"></u-input>
            </u-form-item>
            <u-form-item ref="form_item47"
                         style="border-width:0 0 1px 0;border-style:solid;padding:0 16px 10px 0;border-color:#3491FA;margin:0 0 16px 0;"
                         label="" span="3" :label-ellipsis="false">
              <template #label ref="template41"></template>
              <u-text ref="text5" style="font-weight:bold;margin:0 0 0 -140px;color:#3491FA;" size="large"
                      text="财务信息"></u-text>
            </u-form-item>
            <u-form-item ref="form_item30" label="实缴资本（不需要，已隐藏）" span="3"
                         :required="(manuallyCreate) != (true)"
                         :rules="[{validate: 'filled',message: `实缴资本（不需要，已隐藏）不得为空`,trigger: 'input+blur',required: true}]"
                         :ignore-validation="(manuallyCreate) == (true)" v-if="false">
              <u-number-input ref="number_input3" :value.sync="contributed" :clearable="false" :hide-buttons="true"
                              placeholder="请输入"></u-number-input>
              <u-select ref="select14" style="width:100px;" :clearable="false" placeholder="请选择"
                        :data-source="loadSelect" data-schema="LoadCompanySelectStructure"
                        text-field="neteaselawCurrency.currencyCode" value-field="neteaselawCurrency.currencyCode"
                        :pageable="true" :remote-paging="true"
                        :value.sync="neteaselawCompany.contributedCapitalCurrency" :filterable="true"
                        :remote-filtering="true" append-to="body" @select="select14_select($event)"></u-select>
              <u-number-input ref="number_input6" :value.sync="contributedCNY" :hide-buttons="true"
                              placeholder="请输入转换人民币金额"
                              v-if="((neteaselawCompany || {}).contributedCapitalCurrency) != ('CNY')"></u-number-input>
              <u-text ref="text57" style="margin:0 0 0 5px;" size="normal" text="CNY"
                      v-if="((neteaselawCompany || {}).contributedCapitalCurrency) != ('CNY')"></u-text>
            </u-form-item>
            <u-form-item ref="form_item38" label="投资情况" span="3" :required="false" :rules="[]"
                         :ignore-validation="false" label-size="large" field-size="full">
              <u-linear-layout ref="linear_layout5" style="width:100%;" direction="horizontal">
                <u-grid-layout ref="grid_layout4">
                  <u-grid-layout-row ref="grid_layout_row4" :repeat="24" justify="space-between">
                    <u-grid-layout-column ref="grid_layout_column6" :span="18">
                      <u-table-view ref="table_view3"
                                    style="margin:0px 0 0 0;padding:0px 0 0 0; --custom-start: auto; --table-border-color: none;"
                                    :data-source="listinteriorORexternal"
                                    :show-head="true" :striped="false" empty-text="">
                        <u-table-view-column ref="table_view_column1" title="投资情况">
                          <template #cell="current" ref="template7">
                            <u-select ref="select4" style="margin:0px 0 0 0;" placeholder="请选择"
                                      :value.sync="current.item.interiorORexternal" append-to="body"
                                      :disabled="(outwardInvestment2) != (true)"
                                      @select="select4_select($event, current)">
                              <u-select-item ref="select_item10" :value="'对内投资'">
                                <u-text ref="text14" text="对内投资"></u-text>
                              </u-select-item>
                              <u-select-item ref="select_item16" :value="'对外投资'">
                                <u-text ref="text42" text="对外投资"></u-text>
                              </u-select-item>
                            </u-select>
                          </template>
                        </u-table-view-column>
                        <u-table-view-column ref="table_view_column3" title="公司名称" width="">
                          <template #cell="current" ref="template8">
                            <u-select ref="select12" style="width:150px;" :clearable="false" placeholder="请选择"
                                      :data-source="loadSelect12" data-schema="LoadCompanySelect12Structure"
                                      text-field="neteaselawCompany.companyName"
                                      value-field="neteaselawCompany.companyName" :pageable="true" :remote-paging="true"
                                      :value.sync="current.item.text" append-to="body"
                                      :disabled="(outwardInvestment2) != (true)" :filterable="true"
                                      :remote-filtering="true"
                                      @select="select12_select($event, current)"
                                      v-if="((((current || {}).item || {}).interiorORexternal) == (undefined)) || ((((current || {}).item || {}).interiorORexternal) == ('对内投资'))">
                              <u-select-item ref="select_item20" :value="'如不存在，请输入'">
                                <u-text ref="text44" text="如不存在，请输入"></u-text>
                              </u-select-item>
                            </u-select>
                            <u-input ref="input6" style="width:200px;" placeholder="如未查询到，请输入公司名称"
                                     :value.sync="current.item.companyName" :disabled="(outwardInvestment2) != (true)"
                                     @blur="input6_blur($event, current)"
                                     v-if="((((current || {}).item || {}).interiorORexternal) == ('对外投资')) || ((((current || {}).item || {}).text) == ('如不存在，请输入'))"></u-input>
                          </template>
                        </u-table-view-column>
                        <u-table-view-column ref="table_view_column24" title="投资金额">
                          <template #cell="current" ref="template40">
                            <u-number-input ref="number_input13" :value.sync="current.item.investmentAmount"
                                            :hide-buttons="true" :disabled="(outwardInvestment2) != (true)"
                                            :min="0"></u-number-input>
                          </template>
                        </u-table-view-column>
                        <u-table-view-column ref="table_view_column18" title="币种">
                          <template #cell="current" ref="template39">
                            <u-select ref="select" style="width:100px;" :clearable="false" placeholder="请选择"
                                      :data-source="loadSelect" data-schema="LoadCompanySelectStructure"
                                      text-field="neteaselawCurrency.currencyCode"
                                      value-field="neteaselawCurrency.currencyCode" :pageable="true"
                                      :remote-paging="true"
                                      :value.sync="current.item.currency" :filterable="true" :remote-filtering="true"
                                      append-to="body" :disabled="(outwardInvestment2) != (true)"
                                      @select="select_select($event, current)"></u-select>
                          </template>
                        </u-table-view-column>
                        <u-table-view-column ref="table_view_column9" title="持股比例">
                          <template #cell="current" ref="template38">
                            <u-number-input ref="number_input1" style="width:50%;"
                                            :value.sync="current.item.shareholdingRatio" :min="0"
                                            :hide-buttons="true"></u-number-input>
                            <u-text ref="text66" style="width:10%;" text="%"></u-text>
                          </template>
                        </u-table-view-column>
                        <u-table-view-column ref="table_view_column14" title="">
                          <template #cell="current" ref="template37">
                            <i-ico ref="ico2"
                                   style="width:32px;height:42.66px;position:relative;left:0px;top:8px; --custom-start: auto; font-size:20px;
cursor:pointer"
                                   name="https://lcpapp-static.nos-eastchina1.126.net/user/defaulttenant/1677833182704_%E5%87%8F%E5%B0%91.svg"
                                   icotype="only"
                                   @click="ico2_click($event, current)" v-if="(outwardInvestment2) == (true)"></i-ico>
                          </template>
                        </u-table-view-column>
                      </u-table-view>
                    </u-grid-layout-column>
                    <u-grid-layout-column ref="grid_layout_column8" style="padding:0 0px 0 0;" :span="3">
                      <u-linear-layout ref="linear_layout7" direction="vertical">
                        <u-linear-layout ref="linear_layout20">
                          <u-button ref="button4" style="--button-padding-x:20px; --custom-start: auto; min-width:70px;"
                                    text="+添加" color="default" :disabled="(outwardInvestment2) != (true)"
                                    @click="button4_click($event)"></u-button>
                        </u-linear-layout>
                      </u-linear-layout>
                    </u-grid-layout-column>
                  </u-grid-layout-row>
                </u-grid-layout>
              </u-linear-layout>
            </u-form-item>
            <u-form-item ref="form_item8" style="border-width:0 0 1px 0;padding:0 16px 10px 0;" label="实缴资本"
                         span="3" :label-ellipsis="false" label-layout="inline"
                         layout="block" field-size="full">
              <template #label ref="template17"></template>
              <u-table-view ref="tableView1" :data-source="listContributedCapital"
                            data-schema="LoadCompanyTableView1Structure" value-field="neteaselawContributedCapital.id"
                            :pageable="false" :remote-paging="true" :show-sizer="true" :page-size="50" empty-text="">
                <u-table-view-column ref="table_view_column7" type="index" width="60" title="编号">
                  <template #title ref="template18"></template>
                </u-table-view-column>
                <u-table-view-column ref="table_view_column13" field="neteaselawContributedCapital.investor"
                                     title="出资方">
                  <template #cell="current" ref="template23">
                    <u-linear-layout ref="linear_layout26" gap="small">
                      <u-input ref="input3" placeholder="请输入" :value.sync="current.item.investor"
                               :disabled="(contributedCapital1) != (true)"></u-input>
                    </u-linear-layout>
                  </template>
                  <template #title ref="template24"></template>
                </u-table-view-column>
                <u-table-view-column ref="table_view_column15" field="neteaselawContributedCapital.investorData"
                                     :width="200" title="出资时间">
                  <template #cell="current" ref="template25">
                    <u-linear-layout ref="linear_layout27" gap="small">
                      <u-date-picker ref="date_picker2" style="width:140px;" :date.sync="current.item.investorData"
                                     :disabled="(contributedCapital1) != (true)"></u-date-picker>
                    </u-linear-layout>
                  </template>
                  <template #title ref="template26"></template>
                </u-table-view-column>
                <u-table-view-column ref="table_view_column17" field="neteaselawContributedCapital.investorName"
                                     title="出资币种">
                  <template #cell="current" ref="template27">
                    <u-linear-layout ref="linear_layout28" gap="small">
                      <u-select ref="select8" :clearable="false" placeholder="请选择" :data-source="loadSelect8"
                                data-schema="LoadCompanySelect8Structure" text-field="neteaselawCurrency.currencyCode"
                                value-field="neteaselawCurrency.currencyCode" :pageable="true" :remote-paging="true"
                                :value.sync="current.item.investorName"
                                :filterable="true" :remote-filtering="true" append-to="body"
                                :disabled="(contributedCapital1) != (true)"
                                @select="select8_select($event, current)"></u-select>
                    </u-linear-layout>
                  </template>
                  <template #title ref="template28">
                    <u-text ref="text67" text="出资币种"></u-text>
                  </template>
                </u-table-view-column>
                <u-table-view-column ref="table_view_column19" field="neteaselawContributedCapital.originalCurrency"
                                     title="金额（原币）">
                  <template #cell="current" ref="template29">
                    <u-linear-layout ref="linear_layout29" gap="small">
                      <u-number-input ref="number_input11" :value.sync="current.item.originalCurrency"
                                      :hide-buttons="true" :disabled="(contributedCapital1) != (true)"
                                      :min="0" @change="number_input11_change($event, current)"></u-number-input>
                    </u-linear-layout>
                  </template>
                  <template #title ref="template30">
                    <u-text ref="text69" text="金额（原币）"></u-text>
                  </template>
                </u-table-view-column>
                <u-table-view-column ref="table_view_column20" field="neteaselawContributedCapital.registeredCurrency"
                                     title="金额（注册币种）">
                  <template #cell="current" ref="template31">
                    <u-linear-layout ref="linear_layout30" gap="small">
                      <u-number-input ref="number_input9" :value.sync="current.item.registeredCurrency"
                                      :hide-buttons="true" :disabled="(contributedCapital1) != (true)"></u-number-input>
                    </u-linear-layout>
                  </template>
                  <template #title ref="template32">
                    <u-text ref="text71" text="金额（注册币种）"></u-text>
                  </template>
                </u-table-view-column>
                <u-table-view-column ref="table_view_column21" field="neteaselawContributedCapital.cNY"
                                     title="等值金额（人民币）">
                  <template #cell="current" ref="template33">
                    <u-linear-layout ref="linear_layout31" gap="small">
                      <u-number-input ref="number_input4" :value.sync="current.item.cNY" :hide-buttons="true"
                                      :disabled="(contributedCapital1) != (true)" :min="0"
                                      @change="number_input4_change($event, current)"></u-number-input>
                    </u-linear-layout>
                  </template>
                  <template #title ref="template34">
                    <u-text ref="text73" text="等值金额（人民币）"></u-text>
                  </template>
                </u-table-view-column>
                <u-table-view-column ref="table_view_column22" title="操作">
                  <template #cell="current" ref="template35">
                    <u-linear-layout ref="linear_layout32" gap="small">
                      <u-link ref="link1" text="复制" :disabled="(contributedCapital1) != (true)"
                              @click="link1_click($event, current)"></u-link>
                      <u-link ref="link2" text="删除" :disabled="(contributedCapital1) != (true)"
                              @click="link2_click($event, current)"></u-link>
                    </u-linear-layout>
                  </template>
                  <template #title ref="template36">
                    <u-text ref="text74" text="操作"></u-text>
                  </template>
                </u-table-view-column>
              </u-table-view>
              <u-linear-layout ref="linear_layout34"
                               style="border-style:solid;border-width:1px 1px 1px 1px;text-align:center;height:33.73px;padding:3px 0 0 0;border-color:#c1c1c1;"
                               direction="horizontal" @click="linear_layout34_click($event)"
                               v-if="(contributedCapital1) == (true)">
                <u-text ref="text76" text="+ 添加 1 行数据"></u-text>
              </u-linear-layout>
            </u-form-item>
            <u-form-item ref="form_item2" style="border-width:0 0 1px 0;padding:0 16px 10px 0;" label="" span="3"
                         :label-ellipsis="false" field-size="full">
              <u-table-view ref="table_view2" :data-source="listSumContributedCapital" :page-size="50"
                            :show-head="false" :initial-load="false" empty-text="">
                <u-table-view-column ref="table_view_column8" title="表格列">
                  <template #cell="current" ref="template9">
                    <u-text ref="text55" text="实缴资本币种："></u-text>
                    <u-input ref="input8" style=" --custom-start: auto; max-width: calc(100% - 110px);"
                             placeholder="请输入" :readonly="true" :value.sync="current.item.capitalCurrency"></u-input>
                  </template>
                </u-table-view-column>
                <u-table-view-column ref="table_view_column12" title="表格列">
                  <template #cell="current" ref="template20">
                    <u-text ref="text58" text="实缴资本总金额："></u-text>
                    <u-number-input ref="number_input16" style=" --custom-start: auto; max-width: calc(100% - 154px);"
                                    :value.sync="current.item.cNY" :hide-buttons="true"
                                    :readonly="true"></u-number-input>
                    <u-text ref="text62" style="margin:0 0 0 5px;" size="normal" text="CNY"></u-text>
                  </template>
                </u-table-view-column>
                <u-table-view-column ref="table_view_column10" title="表格列">
                  <template #cell="current" ref="template19">
                    <u-number-input ref="number_input14" style=" --custom-start: auto; max-width: calc(100% - 40px);"
                                    :value.sync="current.item.contributiveSum"
                                    :hide-buttons="true" :readonly="true"></u-number-input>
                    <u-text ref="text60" style="margin:0 0 0 5px;" size="normal"
                            :text="((current || {}).item || {}).contributive"></u-text>
                  </template>
                </u-table-view-column>
              </u-table-view>
            </u-form-item>
            <u-form-item ref="form_item10" style="border-width:0 0 1px 0;padding:0 16px 10px 0;" label="" span="3"
                         :label-ellipsis="false">
              <u-linear-layout ref="linear_layout23" direction="horizontal">
                <u-text ref="text56" text="待出资注册资本"></u-text>
                <u-number-input ref="number_input10" style="width:140px;"
                                :value.sync="neteaselawCompany.awaitRegisteredCapital" :clearable="false"
                                :hide-buttons="true"
                                :disabled="(awaitRegisteredCapital) != (true)"></u-number-input>
                <u-text ref="text77" style="margin:0 0 0 5px;" size="normal"
                        :text="(neteaselawCompany || {}).registeredCapitalCurrency"></u-text>
              </u-linear-layout>
            </u-form-item>
            <u-form-item ref="form_item49" style=" --custom-start: auto; --form-required-right-large: 90px"
                         label="记账本位币" span="1" :required="(recordingCurrency) && ((manuallyCreate) != (true))"
                         :rules="[{validate: 'filled',message: `记账本位币不得为空`,trigger: 'input+blur',required: true}]"
                         :ignore-validation="(((recordingCurrency) != (true)) || ((manuallyCreate) == (true))) || ((((userPermissions || {}).data || {}).admin) == (true))"
                         field-size="full">
              <u-input ref="input25" style="width:100%;" placeholder="人民币"
                       :value.sync="neteaselawCompany.recordingCurrency"
                       :disabled="(recordingCurrency) != (true)"></u-input>
            </u-form-item>
            <u-form-item ref="form_item16" style=" --custom-start: auto; --form-required-right-large: 90px" label=""
                         span="1" :required="false"
                         :rules="[{validate: 'filled',message: `表单项不得为空`,trigger: 'input+blur',required: true}]"
                         :ignore-validation="(((recordingCurrency) != (true)) || ((manuallyCreate) == (true))) || ((((userPermissions || {}).data || {}).admin) == (true))"
                         field-size="full">
              <u-checkboxes ref="checkboxes1" :data-source="multipleResponse" text-field="" value-field=""
                            :value.sync="multipleResponse2" :disabled="(businessAccounting) != (true)"
                            @change="checkboxes1_change($event)">
                <template #item="current" ref="template4">
                  <u-text ref="text45" text="是否独立核算"></u-text>
                </template>
              </u-checkboxes>
              <template #label ref="template44"></template>
            </u-form-item>
            <u-form-item ref="form_item32" style=" --custom-start: auto; display:none;" label="" span="1"
                         :required="false"
                         :rules="[{validate: 'filled',message: `表单项不得为空`,trigger: 'input+blur',required: true}]"
                         :ignore-validation="(((recordingCurrency) != (true)) || ((manuallyCreate) == (true))) || ((((userPermissions || {}).data || {}).admin) == (true))"
                         field-size="full">
              <u-checkboxes ref="checkboxes3" text-field="" value-field="" :value="[]" :disabled="false">
                <template #item="current" ref="template16">
                  <u-text ref="text47" text="是否独立核算"></u-text>
                </template>
              </u-checkboxes>
            </u-form-item>
            <u-form-item ref="form_item15" style=" --custom-start: auto; --form-required-right-large: 90px" label=""
                         span="1" :required="false"
                         :rules="[{validate: 'filled',message: `表单项不得为空`,trigger: 'input+blur',required: true}]"
                         :ignore-validation="(((recordingCurrency) != (true)) || ((manuallyCreate) == (true))) || ((((userPermissions || {}).data || {}).admin) == (true))"
                         field-size="full">
              <u-checkboxes ref="checkboxes2" style="margin:0 0 0 50px;" :data-source="multipleResponse1" text-field=""
                            value-field="" :value.sync="multipleResponse3"
                            :disabled="(financialStatement) != (true)" @change="checkboxes2_change($event)">
                <template #item="current" ref="template42">
                  <u-text ref="text61" style="width:200px;" text="是否编制个别财务报表"></u-text>
                </template>
              </u-checkboxes>
            </u-form-item>
            <u-form-item ref="form_item7"
                         style="border-width:0 0 1px 0;border-style:solid;padding:0 16px 10px 0;border-color:#3491FA;margin:0 0 16px 0;"
                         label="" span="3" :label-ellipsis="false">
              <template #label ref="template43"></template>
              <u-text ref="text4" style="font-weight:bold;margin:0 0 0 -140px;color:#3491FA;" size="large"
                      text="税务信息"></u-text>
            </u-form-item>
            <u-form-item ref="form_item36" style=" --custom-start: auto; --form-required-right-large: 80px"
                         label="人员规模" span="1" :required="(staffSize) && ((manuallyCreate) != (true))"
                         :rules="[{validate: 'filled',message: `人员规模不得为空`,trigger: 'input+blur',required: true} , {validate: 'maxLength',args: [50] ,message: `不得超过${50}个字符`,trigger: 'input+blur'}]"
                         :ignore-validation="(((staffSize) != (true)) || ((manuallyCreate) == (true))) || ((((userPermissions || {}).data || {}).admin) == (true))"
                         field-size="full">
              <u-input ref="input24" style="width:100%;" placeholder="请输入" :value.sync="neteaselawCompany.staffSize"
                       :disabled="(staffSize) != (true)"></u-input>
            </u-form-item>
            <u-form-item ref="form_item51" style=" --custom-start: auto; --form-required-right-large: 80px"
                         label="参保人数" span="1" :required="(insurednumber) && ((manuallyCreate) != (true))"
                         :rules="[{validate: 'filled',message: `参保人数不得为空`,trigger: 'input+blur',required: true} , {validate: 'maxLength',args: [50] ,message: `不得超过${50}个字符`,trigger: 'input+blur'}]"
                         :ignore-validation="(((insurednumber) != (true)) || ((manuallyCreate) == (true))) || ((((userPermissions || {}).data || {}).admin) == (true))"
                         field-size="full">
              <u-input ref="input26" style="width:100%;" placeholder="请输入"
                       :value.sync="neteaselawCompany.insurednumber" :disabled="(insurednumber) != (true)"></u-input>
            </u-form-item>
            <u-form-item ref="form_item1" style=" --custom-start: auto; --form-required-right-large:90px"
                         label="纳税人类型" :required="(manuallyCreate) != (true)"
                         :rules="[{validate: 'filled',message: `纳税人类型不得为空`,trigger: 'input+blur',required: true} , {validate: 'maxLength',args: [50] ,message: `不得超过${50}个字符`,trigger: 'input+blur'}]"
                         :ignore-validation="(((taxpayerType) != (true)) || ((((neteaselawCompany || {}).companyAttribute) != ('21')) && ((((neteaselawCompany || {}).companyAttribute) != ('22')) && ((((neteaselawCompany || {}).companyAttribute) != ('23')) && ((((neteaselawCompany || {}).companyAttribute) != ('24')) && (((neteaselawCompany || {}).companyAttribute) != ('25'))))))) || ((((userPermissions || {}).data || {}).admin) == (true))"
                         span="1" field-size="full"
                         v-if="(((neteaselawCompany || {}).companyAttribute) != ('11')) && (((neteaselawCompany || {}).companyAttribute) != ('12'))">
              <u-select ref="select6" style="width:100%;" :clearable="true" placeholder="请选择"
                        :data-source="$utils['EnumToList']({'concept':'TypeAnnotation','name':'','typeKind':'reference','typeNamespace':'app.enums','typeName':'TaxpayerType','typeArguments':null,'returnType':null,'properties':null})"
                        :value.sync="neteaselawCompany.taxpayerType" :disabled="(taxpayerType) != (true)"></u-select>
            </u-form-item>
            <u-form-item ref="form_item19" style=" --custom-start: auto; --form-required-right-large:90px" label=""
                         :required="false" :rules="[]" :ignore-validation="false"
                         span="1" field-size="full">
              <u-checkboxes ref="checkboxes5" :data-source="multipleResponse6" text-field="" value-field=""
                            :value.sync="multipleResponse7" :disabled="(highTechEnterprise) != (true)"
                            @change="checkboxes5_change($event)">
                <template #item="current" ref="template14">
                  <u-text ref="text43" text="是否是高新企业"></u-text>
                </template>
              </u-checkboxes>
            </u-form-item>
            <u-form-item ref="form_item56" label="开票信息：" span="3" label-size="large"
                         v-if="(((neteaselawCompany || {}).companyAttribute) != ('11')) && (((neteaselawCompany || {}).companyAttribute) != ('12'))"></u-form-item>
            <u-form-item ref="form_item62" style=" --custom-start: auto; --form-required-right-large: 120px"
                         label="纳税人识别号" span="3" :required="(manuallyCreate) != (true)"
                         :rules="[{validate: 'maxLength',args: [50] ,message: `不得超过${50}个字符`,trigger: 'input+blur'} , {validate: 'filled',message: `纳税人识别号不得为空`,trigger: 'input+blur',required: true}]"
                         :ignore-validation="(((taxpayeridentifyNumber) != (true)) || ((((neteaselawCompany || {}).companyAttribute) != ('21')) && ((((neteaselawCompany || {}).companyAttribute) != ('22')) && ((((neteaselawCompany || {}).companyAttribute) != ('23')) && ((((neteaselawCompany || {}).companyAttribute) != ('24')) && (((neteaselawCompany || {}).companyAttribute) != ('25'))))))) || ((((userPermissions || {}).data || {}).admin) == (true))"
                         field-size="full"
                         v-if="(((neteaselawCompany || {}).companyAttribute) != ('11')) && (((neteaselawCompany || {}).companyAttribute) != ('12'))">
              <u-input ref="input30" style="width:40%;" placeholder="请输入"
                       :value.sync="neteaselawCompany.taxpayeridentifyNumber"
                       :disabled="(taxpayeridentifyNumber) != (true)"></u-input>
            </u-form-item>
            <u-form-item ref="form_item68" style=" --custom-start: auto; --form-required-right-large: 80px" label="地址"
                         span="3" :required="(manuallyCreate) != (true)"
                         :rules="[{validate: 'filled',message: `地址不得为空`,trigger: 'input+blur',required: true} , {validate: 'maxLength',args: [50] ,message: `不得超过${50}个字符`,trigger: 'input+blur'}]"
                         :ignore-validation="(((site) != (true)) || ((((neteaselawCompany || {}).companyAttribute) != ('21')) && ((((neteaselawCompany || {}).companyAttribute) != ('22')) && ((((neteaselawCompany || {}).companyAttribute) != ('23')) && ((((neteaselawCompany || {}).companyAttribute) != ('24')) && (((neteaselawCompany || {}).companyAttribute) != ('25'))))))) || ((((userPermissions || {}).data || {}).admin) == (true))"
                         field-size="full"
                         v-if="(((neteaselawCompany || {}).companyAttribute) != ('11')) && (((neteaselawCompany || {}).companyAttribute) != ('12'))">
              <u-input ref="input33" style="width:40%;" placeholder="请输入" :value.sync="neteaselawCompany.site"
                       :disabled="(site) != (true)"></u-input>
            </u-form-item>
            <u-form-item ref="form_item66" style=" --custom-start: auto; --form-required-right-large: 80px" label="电话"
                         span="3" :required="(manuallyCreate) != (true)"
                         :rules="[{validate: 'filled',message: `电话不得为空`,trigger: 'input+blur',required: true} , {validate: 'maxLength',args: [50] ,message: `不得超过${50}个字符`,trigger: 'input+blur'}]"
                         :ignore-validation="(((phone) != (true)) || ((((neteaselawCompany || {}).companyAttribute) != ('21')) && ((((neteaselawCompany || {}).companyAttribute) != ('22')) && ((((neteaselawCompany || {}).companyAttribute) != ('23')) && ((((neteaselawCompany || {}).companyAttribute) != ('24')) && (((neteaselawCompany || {}).companyAttribute) != ('25'))))))) || ((((userPermissions || {}).data || {}).admin) == (true))"
                         field-size="full"
                         v-if="(((neteaselawCompany || {}).companyAttribute) != ('11')) && (((neteaselawCompany || {}).companyAttribute) != ('12'))">
              <u-input ref="input32" style="width:40%;" placeholder="请输入" :value.sync="neteaselawCompany.phone"
                       :disabled="(phone) != (true)"></u-input>
            </u-form-item>
            <u-form-item ref="form_item64" style=" --custom-start: auto; --form-required-right-large: 80px"
                         label="开户行" span="3" :required="(manuallyCreate) != (true)"
                         :rules="[{validate: 'filled',message: `开户行不得为空`,trigger: 'input+blur',required: true} , {validate: 'maxLength',args: [50] ,message: `不得超过${50}个字符`,trigger: 'input+blur'}]"
                         :ignore-validation="(((openingBank) != (true)) || ((((neteaselawCompany || {}).companyAttribute) != ('21')) && ((((neteaselawCompany || {}).companyAttribute) != ('22')) && ((((neteaselawCompany || {}).companyAttribute) != ('23')) && ((((neteaselawCompany || {}).companyAttribute) != ('24')) && (((neteaselawCompany || {}).companyAttribute) != ('25'))))))) || ((((userPermissions || {}).data || {}).admin) == (true))"
                         field-size="full"
                         v-if="(((neteaselawCompany || {}).companyAttribute) != ('11')) && (((neteaselawCompany || {}).companyAttribute) != ('12'))">
              <u-input ref="input31" style="width:40%;" placeholder="请输入" :value.sync="neteaselawCompany.openingBank"
                       :disabled="(openingBank) != (true)"></u-input>
            </u-form-item>
            <u-form-item ref="form_item70" style=" --custom-start: auto; --form-required-right-large: 80px" label="账号"
                         span="3" :required="(manuallyCreate) != (true)"
                         :rules="[{validate: 'filled',message: `账号不得为空`,trigger: 'input+blur',required: true} , {validate: 'maxLength',args: [50] ,message: `不得超过${50}个字符`,trigger: 'input+blur'}]"
                         :ignore-validation="(((account) != (true)) || ((((neteaselawCompany || {}).companyAttribute) != ('21')) && ((((neteaselawCompany || {}).companyAttribute) != ('22')) && ((((neteaselawCompany || {}).companyAttribute) != ('23')) && ((((neteaselawCompany || {}).companyAttribute) != ('24')) && (((neteaselawCompany || {}).companyAttribute) != ('25'))))))) || ((((userPermissions || {}).data || {}).admin) == (true))"
                         field-size="full"
                         v-if="(((neteaselawCompany || {}).companyAttribute) != ('11')) && (((neteaselawCompany || {}).companyAttribute) != ('12'))">
              <u-input ref="input34" style="width:40%;" placeholder="请输入" :value.sync="neteaselawCompany.account"
                       :disabled="(account) != (true)"></u-input>
            </u-form-item>
            <u-form-item ref="form_item26" style="text-align:right;" span="3">
              <u-button ref="button7"
                        style="--button-padding-x:15px;--button-padding-y:4px; --custom-start: auto; min-width:34px;"
                        text="取消" :destination="`/CompanyList`"></u-button>
              <u-button ref="button1"
                        style="margin:0 0 0 10px;--button-padding-y:4px;--button-padding-x:15px; --custom-start: auto; min-width:64px;"
                        color="primary" text="提交" @click="button1_click($event)"></u-button>
            </u-form-item>
          </u-form>
        </u-linear-layout>
        <u-linear-layout ref="linear_layout16" direction="horizontal"></u-linear-layout>
        <template #title ref="template3">
          <u-button ref="button2"
                    style="font-size:14px;--button-padding-y:4px;--button-padding-x:10px; --custom-start: auto; min-width:64px;"
                    color="primary" text="返回" :destination="`/CompanyList`" size="normal"></u-button>
        </template>
      </u-panel>
    </u-linear-layout>
    <u-linear-layout ref="linear_layout6" direction="horizontal"></u-linear-layout>
    <u-linear-layout ref="linear_layout4" direction="horizontal"></u-linear-layout>
  </u-linear-layout>

</template>
<script>
export default {

  data() {
    return {
      ['manuallyCreate']: this.$route.query.hasOwnProperty('manuallyCreate') ? this.$genInitFromSchema('nasl.core.Boolean', this.$route.query.manuallyCreate) : undefined,
      ['guid']: this.$route.query.hasOwnProperty('guid') ? this.$genInitFromSchema('nasl.core.Long', this.$route.query.guid) : undefined,
      ['neteaselawCompany']: this.$genInitFromSchema('app.dataSources.defaultDS.entities.NeteaselawCompany', undefined),
      ['neteaselawShareholder']: this.$genInitFromSchema('app.dataSources.defaultDS.entities.NeteaselawShareholder', undefined),
      ['input']: this.$genInitFromSchema('app.dataSources.defaultDS.entities.NeteaselawShareholder', undefined),
      ['filter']: this.$genInitFromSchema('app.dataSources.defaultDS.entities.NeteaselawShareholder', undefined),
      ['isUpdate']: undefined,
      ['sumshareholdingRatio']: false,
      ['multipleResponse']: this.$genInitFromSchema('nasl.collection.List<nasl.core.String>', undefined),
      ['multipleResponse1']: this.$genInitFromSchema('nasl.collection.List<nasl.core.String>', undefined),
      ['multipleResponse2']: this.$genInitFromSchema('nasl.collection.List<nasl.core.String>', undefined),
      ['multipleResponse3']: this.$genInitFromSchema('nasl.collection.List<nasl.core.String>', undefined),
      ['multipleResponse4']: undefined,
      ['multipleResponse5']: undefined,
      ['listinteriorORexternal']: this.$genInitFromSchema('nasl.collection.List<app.dataSources.defaultDS.entities.NeteaselawInteriorORexternal>', undefined),
      ['judgeinteriorORexternal']: false,
      ['judgeNeteaselawShareholder']: false,
      ['registered']: undefined,
      ['registeredCNY']: undefined,
      ['contributed']: undefined,
      ['contributedCNY']: undefined,
      ['outwardInvestment']: undefined,
      ['outwardInvestment1']: undefined,
      ['updateRecord']: undefined,
      ['variable7']: undefined,
      ['companyDateOfEstablishment']: undefined,
      ['listContributedCapital']: this.$genInitFromSchema('nasl.collection.List<app.dataSources.defaultDS.entities.NeteaselawContributedCapital>', undefined),
      ['listSumContributedCapital']: this.$genInitFromSchema('nasl.collection.List<app.structures.SumContributedCapital>', undefined),
      ['returnContributedCapital']: this.$genInitFromSchema('{list: nasl.collection.List<{neteaselawContributedCapital: app.dataSources.defaultDS.entities.NeteaselawContributedCapital}>, total: nasl.core.Integer}', undefined),
      ['return1NeteaselawShareholder']: this.$genInitFromSchema('{list: nasl.collection.List<{neteaselawShareholder: app.dataSources.defaultDS.entities.NeteaselawShareholder}>, total: nasl.core.Integer}', undefined),
      ['returnInteriorOrexternal']: this.$genInitFromSchema('{list: nasl.collection.List<{neteaselawInteriorORexternal: app.dataSources.defaultDS.entities.NeteaselawInteriorORexternal}>, total: nasl.core.Integer}', undefined),
      ['map']: this.$genInitFromSchema('nasl.collection.Map<nasl.core.String, nasl.core.String>', undefined),
      ['returnGetUserPermissions']: this.$genInitFromSchema('apis.licenseJurisdiction.structures.ApiReturnOfGetUserPermissions', undefined),
      ['guidList']: this.$genInitFromSchema('nasl.collection.List<nasl.core.String>', undefined),
      ['companyName']: undefined,
      ['companyFinancialCode']: undefined,
      ['companyAttribute']: undefined,
      ['companyCountry']: undefined,
      ['legalPerson']: undefined,
      ['companyStatus']: undefined,
      ['dateOfIncorporation']: undefined,
      ['tfshareholder1']: undefined,
      ['shareholder1']: undefined,
      ['shareholderRatio']: undefined,
      ['registeredCapital']: undefined,
      ['contributedCapital1']: undefined,
      ['legalRepresentative']: undefined,
      ['executiveCommittee']: undefined,
      ['president']: undefined,
      ['supervisor']: undefined,
      ['staffSize']: undefined,
      ['insurednumber']: undefined,
      ['recordingCurrency']: undefined,
      ['businessAccounting']: undefined,
      ['financialStatement']: undefined,
      ['taxpayerType']: undefined,
      ['taxpayeridentifyNumber']: undefined,
      ['site']: undefined,
      ['phone']: undefined,
      ['openingBank']: undefined,
      ['account']: undefined,
      ['controllingSubject']: undefined,
      ['headOffice']: undefined,
      ['unifiedSocialCreditCodes']: undefined,
      ['outwardInvestment2']: undefined,
      ['awaitRegisteredCapital']: undefined,
      ['variable8']: true,
      ['businessFirstOrg']: undefined,
      ['listNeteaselawShareholder']: this.$genInitFromSchema('nasl.collection.List<app.structures.Shareholder>', undefined),
      ['user11']: this.$genInitFromSchema('nasl.collection.List<apis.licenseJurisdiction.structures.EhrUserRespVO>', undefined),
      ['user12']: this.$genInitFromSchema('nasl.collection.List<apis.licenseJurisdiction.structures.EhrUserRespVO>', undefined),
      ['user13']: this.$genInitFromSchema('nasl.collection.List<apis.licenseJurisdiction.structures.EhrUserRespVO>', undefined),
      ['guidren']: undefined,
      ['variable9']: this.$genInitFromSchema('{list: nasl.collection.List<{neteaselawShareholder: app.dataSources.defaultDS.entities.NeteaselawShareholder}>, total: nasl.core.Integer}', undefined),
      ['variable10']: this.$genInitFromSchema('app.dataSources.defaultDS.entities.NeteaselawCompany', undefined),
      ['userPermissions']: this.$genInitFromSchema('extensions.fawu_sign.structures.ResponseBodyString', undefined),
      ['filialePerson']: false,
      ['multipleResponse6']: this.$genInitFromSchema('nasl.collection.List<nasl.core.String>', undefined),
      ['multipleResponse8']: undefined,
      ['multipleResponse7']: this.$genInitFromSchema('nasl.collection.List<nasl.core.String>', undefined),
      ['chineseName1']: undefined,
      ['englishName']: undefined,
      ['bearerService']: undefined,
      ['highTechEnterprise']: undefined,
      ['filialePerson2']: undefined,
      ['return1NeteaselawShareholder1']: this.$genInitFromSchema('{list: nasl.collection.List<{neteaselawShareholder: app.dataSources.defaultDS.entities.NeteaselawShareholder}>, total: nasl.core.Integer}', undefined)
    };
  },
  meta: {
    title: "易企查",
    crumb: null,
    first: undefined,
    auth: undefined,
  },
  methods: {
    async load(params) {
      params = this.$genInitFromSchema('nasl.ui.DataSourceParams', params || (this.$route.query.hasOwnProperty('params') ? this.$genInitFromSchema('nasl.ui.DataSourceParams', this.$route.query.params) : ""));
      let variable1 = this.$genInitFromSchema('nasl.collection.Map<nasl.core.String, nasl.core.String>', undefined);
      let result = this.$genInitFromSchema('{list: nasl.collection.List<{neteaselawCompany: app.dataSources.defaultDS.entities.NeteaselawCompany, neteaselawShareholder: app.dataSources.defaultDS.entities.NeteaselawShareholder}>, total: nasl.core.Integer}', undefined);

      result = this.$genInitFromSchema('{list: nasl.collection.List<{neteaselawCompany: app.dataSources.defaultDS.entities.NeteaselawCompany, neteaselawShareholder: app.dataSources.defaultDS.entities.NeteaselawShareholder}>, total: nasl.core.Integer}', await this.$logics['app.logics.loadCompanyTableView']({
        config: {
          download: false,
        },
        query: {},
        headers: {},
        path: {},
        body: {
          page: (params || {}).page,
          size: (params || {}).size,
          sort: (params || {}).sort,
          order: (params || {}).order,
          filter: this.filter
        }
      }))
      return result;
    }
    ,

    async loadSelect8NeteaselawCompany(params) {
      params = this.$genInitFromSchema('nasl.ui.DataSourceParams', params || (this.$route.query.hasOwnProperty('params') ? this.$genInitFromSchema('nasl.ui.DataSourceParams', this.$route.query.params) : ""));
      let result = this.$genInitFromSchema('{list: nasl.collection.List<{neteaselawCompany: app.dataSources.defaultDS.entities.NeteaselawCompany}>, total: nasl.core.Integer}', undefined);

      result = this.$genInitFromSchema('{list: nasl.collection.List<{neteaselawCompany: app.dataSources.defaultDS.entities.NeteaselawCompany}>, total: nasl.core.Integer}', await this.$logics['app.logics.loadCompanySelect8NeteaselawCompany']({
        config: {
          download: false,
        },
        query: {},
        headers: {},
        path: {},
        body: {
          page: (params || {}).page,
          size: (params || {}).size
        }
      }))
      return result;
    }
    ,

    async judge(event, current) {
      event = this.$genInitFromSchema('nasl.ui.FocusEvent', event || (this.$route.query.hasOwnProperty('event') ? this.$genInitFromSchema('nasl.ui.FocusEvent', this.$route.query.event) : ""));
      current = this.$genInitFromSchema('nasl.ui.Current<app.structures.InteriorORexternal1>', current || (this.$route.query.hasOwnProperty('current') ? this.$genInitFromSchema('nasl.ui.Current<app.structures.InteriorORexternal1>', this.$route.query.current) : ""));

      if ((((current || {}).item || {}).interiorORexternal) == (undefined)) {
        this.judgeinteriorORexternal = true
      } else {
        if ((((current || {}).item || {}).interiorORexternal) == ('内部')) {
          if ((((current || {}).item || {}).companyName) == (undefined)) {
            this.judgeinteriorORexternal = true
          } else {
            if ((((current || {}).item || {}).companyName) == ('如不存在，请输入')) {
              if ((((current || {}).item || {}).custom) == ('')) {
                this.judgeinteriorORexternal = true
              } else {
                await this.$toast.show(123)
                this.judgeinteriorORexternal = false
              }

            } else {
              await this.$toast.show('文本')
              this.judgeinteriorORexternal = false
            }

            this.judgeinteriorORexternal = false
          }

        } else {
          if ((((current || {}).item || {}).interiorORexternal) == ('外部')) {
            if ((((current || {}).item || {}).custom) == (undefined)) {
              this.judgeinteriorORexternal = true
            } else {
              this.judgeinteriorORexternal = false
            }

          } else {
          }

        }

      }

      return;
    }
    ,

    async forjudge() {
      let variable1 = undefined;

      variable1 = false
      if (Array.isArray(this.listinteriorORexternal)) {
        for (let index = 0; index < ((this.listinteriorORexternal || {}).length); index++) {
          const item = (this.listinteriorORexternal)[index];
          if (((item || {}).interiorORexternal) == (undefined)) {
            variable1 = true
          } else {
          }

          if ((((item || {}).interiorORexternal) == ('对内投资')) && (((item || {}).text) == (undefined))) {
            variable1 = true
          } else {
          }

          if ((((item || {}).interiorORexternal) == ('对内投资')) && (((item || {}).text) != (undefined))) {
            variable1 = false
          } else {
          }

          if ((((item || {}).interiorORexternal) == ('对内投资')) && ((((item || {}).text) == ('如不存在，请输入')) && (((item || {}).companyName) == (undefined)))) {
            variable1 = true
          } else {
          }

          if ((((item || {}).interiorORexternal) == ('对外投资')) && (((item || {}).companyName) == (undefined))) {
            variable1 = true
          } else {
          }

          if ((((item || {}).interiorORexternal) == ('对内投资')) && (((item || {}).text) != ('如不存在，请输入'))) {
            variable1 = false
          } else {
          }

        }
      }

      this.judgeinteriorORexternal = variable1
      return;
    }
    ,

    async judge1NeteaselawShareholder() {
      let variable1 = undefined;

      variable1 = false
      if (Array.isArray(this.listNeteaselawShareholder)) {
        for (let index = 0; index < ((this.listNeteaselawShareholder || {}).length); index++) {
          const item = (this.listNeteaselawShareholder)[index];
          if ((((item || {}).shareholder) == (undefined)) || (((((item || {}).shareholderNameEmail || {}).shareholderNameEmail) == (undefined)) || (((item || {}).shareholdingRatio) == (undefined)))) {
            variable1 = true
          } else {
          }

          if (((((item || {}).shareholder) == ("1")) && ((((item || {}).shareholderNameEmail || {}).shareholderNameEmail) == ('其他'))) && (((item || {}).userDefined) == (undefined))) {
            variable1 = true
          } else {
          }

          if (((((item || {}).shareholder) != ("1")) && (((((item || {}).shareholderNameEmail || {}).shareholderNameEmail) != (undefined)) && (((item || {}).shareholdingRatio) != (undefined)))) || ((((((item || {}).shareholder) == ("1")) && ((((item || {}).shareholderNameEmail || {}).shareholderNameEmail) == ('其他'))) && ((((item || {}).userDefined) != (undefined)) && (((item || {}).shareholdingRatio) != (undefined)))) || ((((item || {}).shareholder) == ("2")) && ((((item || {}).userDefined) != (undefined)) && (((item || {}).shareholdingRatio) != (undefined)))))) {
            variable1 = false
          } else {
          }

          if ((((item || {}).shareholder) == ("0")) && ((((item || {}).shareholderName) != (undefined)) && (((item || {}).shareholdingRatio) != (undefined)))) {
            variable1 = false
          } else {
          }

        }
      }

      this.judgeNeteaselawShareholder = variable1
      return;
    }
    ,

    async sumrutio() {
      let sum = undefined;

      sum = 0
      if (Array.isArray(this.listNeteaselawShareholder)) {
        for (let index = 0; index < ((this.listNeteaselawShareholder || {}).length); index++) {
          const item = (this.listNeteaselawShareholder)[index];
          sum = this.$global.add(sum, (item || {}).shareholdingRatio)
        }
      }

      if ((sum) == (100)) {
        this.sumshareholdingRatio = false
      } else {
        this.sumshareholdingRatio = true
      }

      return;
    }
    ,

    async updateORcreatea() {
      let variable1 = undefined;
      let returnshareholder = this.$genInitFromSchema('app.dataSources.defaultDS.entities.NeteaselawShareholder', undefined);
      let shareholder = this.$genInitFromSchema('app.dataSources.defaultDS.entities.NeteaselawShareholder', undefined);

      if (((this.return1NeteaselawShareholder || {}).total) > (0)) {
        if (Array.isArray((this.return1NeteaselawShareholder || {}).list)) {
          for (let index = 0; index < (((this.return1NeteaselawShareholder || {}).list || {}).length); index++) {
            const item = ((this.return1NeteaselawShareholder || {}).list)[index];
            if ((((item || {}).neteaselawShareholder || {}).id) != (undefined)) {
              returnshareholder = this.$genInitFromSchema('app.dataSources.defaultDS.entities.NeteaselawShareholder', await this.$logics['app.dataSources.defaultDS.entities.NeteaselawShareholder.logics.get']({
                config: {
                  download: false,
                },
                query: {},
                headers: {},
                query: {
                  id: ((item || {}).neteaselawShareholder || {}).id
                },
                body: {}
              }))
            } else {
            }

            if (((returnshareholder || {}).id) != (undefined)) {
              await this.$logics['app.dataSources.defaultDS.entities.NeteaselawShareholder.logics.delete']({
                config: {
                  download: false,
                },
                query: {},
                headers: {},
                query: {
                  id: ((item || {}).neteaselawShareholder || {}).id
                },
                body: {}
              })
            } else {
            }

          }
        }

      } else {
      }

      if (Array.isArray(this.listNeteaselawShareholder)) {
        for (let index = 0; index < ((this.listNeteaselawShareholder || {}).length); index++) {
          const item = (this.listNeteaselawShareholder)[index];
          item.cid = this.guid
          if ((((item || {}).shareholderNameEmail || {}).shareholderNameEmail) == ('其他')) {
            item.shareholderName = (item || {}).userDefined
            item.userDefined = '其他'
            item.shareholderNameEmail.shareholderNameEmail = undefined
          } else {
          }

          if (((item || {}).shareholder) == ("2")) {
            item.shareholderName = (item || {}).userDefined
          } else {
          }

          shareholder.id = (item || {}).id
          shareholder.createdTime = (item || {}).createdTime
          shareholder.updatedTime = (item || {}).updatedTime
          shareholder.createdBy = (item || {}).createdBy
          shareholder.updatedBy = (item || {}).updatedBy
          shareholder.shareholderName = (item || {}).shareholderName
          shareholder.cid = (item || {}).cid
          shareholder.shareholdingRatio = (item || {}).shareholdingRatio
          shareholder.userDefined = (item || {}).userDefined
          shareholder.shareholder = (item || {}).shareholder
          shareholder.shareholderNameEmail = ((item || {}).shareholderNameEmail || {}).shareholderNameEmail
          this.$genInitFromSchema('app.dataSources.defaultDS.entities.NeteaselawShareholder', await this.$logics['app.dataSources.defaultDS.entities.NeteaselawShareholder.logics.create']({
            config: {
              download: false,
            },
            query: {},
            headers: {},

            body: shareholder
          }))
        }
      }

      return;
    }
    ,

    async getNeteaselawInteriorORexternal() {
      let NeteaselawInteriorORexternal = this.$genInitFromSchema('app.dataSources.defaultDS.entities.NeteaselawInteriorORexternal', undefined);

      this.returnInteriorOrexternal = this.$genInitFromSchema('{list: nasl.collection.List<{neteaselawInteriorORexternal: app.dataSources.defaultDS.entities.NeteaselawInteriorORexternal}>, total: nasl.core.Integer}', await this.$logics['app.logics.getNeteaselawInteriorORexternal']({
        config: {
          download: false,
        },
        query: {},
        headers: {},
        path: {},
        body: {
          gid: this.guid
        }
      }))
      if (Array.isArray((this.returnInteriorOrexternal || {}).list)) {
        for (let index = 0; index < (((this.returnInteriorOrexternal || {}).list || {}).length); index++) {
          const item = ((this.returnInteriorOrexternal || {}).list)[index];
          NeteaselawInteriorORexternal.id = ((item || {}).neteaselawInteriorORexternal || {}).id
          NeteaselawInteriorORexternal.createdTime = ((item || {}).neteaselawInteriorORexternal || {}).createdTime
          NeteaselawInteriorORexternal.interiorORexternal = ((item || {}).neteaselawInteriorORexternal || {}).interiorORexternal
          if ((((item || {}).neteaselawInteriorORexternal || {}).type) == ("0")) {
            NeteaselawInteriorORexternal.text = '如不存在，请输入'
            NeteaselawInteriorORexternal.companyName = ((item || {}).neteaselawInteriorORexternal || {}).companyName
          } else {
            NeteaselawInteriorORexternal.text = ((item || {}).neteaselawInteriorORexternal || {}).companyName
            NeteaselawInteriorORexternal.companyName = undefined
          }

          NeteaselawInteriorORexternal.type = ((item || {}).neteaselawInteriorORexternal || {}).type
          NeteaselawInteriorORexternal.cid = ((item || {}).neteaselawInteriorORexternal || {}).cid
          NeteaselawInteriorORexternal.investmentAmount = ((item || {}).neteaselawInteriorORexternal || {}).investmentAmount
          NeteaselawInteriorORexternal.currency = ((item || {}).neteaselawInteriorORexternal || {}).currency
          NeteaselawInteriorORexternal.shareholdingRatio = ((item || {}).neteaselawInteriorORexternal || {}).shareholdingRatio
          this.$utils['Add'](this.listinteriorORexternal, this.$genInitFromSchema('app.dataSources.defaultDS.entities.NeteaselawInteriorORexternal', this.$utils['Clone'](NeteaselawInteriorORexternal)))
        }
      }

      return;
    }
    ,

    async createORupdateNeteaselawInteriorORexternal() {

      if (Array.isArray((this.returnInteriorOrexternal || {}).list)) {
        for (let index = 0; index < (((this.returnInteriorOrexternal || {}).list || {}).length); index++) {
          const item = ((this.returnInteriorOrexternal || {}).list)[index];
          if ((((item || {}).neteaselawInteriorORexternal || {}).id) != (undefined)) {
            await this.$logics['app.dataSources.defaultDS.entities.NeteaselawInteriorORexternal.logics.delete']({
              config: {
                download: false,
              },
              query: {},
              headers: {},
              query: {
                id: ((item || {}).neteaselawInteriorORexternal || {}).id
              },
              body: {}
            })
          } else {
          }

        }
      }

      if (Array.isArray(this.listinteriorORexternal)) {
        for (let index = 0; index < ((this.listinteriorORexternal || {}).length); index++) {
          const item = (this.listinteriorORexternal)[index];
          if ((((item || {}).text) == ('如不存在，请输入')) || (((item || {}).interiorORexternal) == ('对外投资'))) {
            item.type = "0"
            if (((item || {}).interiorORexternal) == ('对内投资')) {
              item.text = '如不存在，请输入'
            } else {
              item.text = undefined
            }

          } else {
            item.type = "1"
            /* 如果是内部选择的，那么就把值放入到custom */
            item.companyName = (item || {}).text
            item.text = undefined
          }

          item.cid = this.guid
          this.$genInitFromSchema('app.dataSources.defaultDS.entities.NeteaselawInteriorORexternal', await this.$logics['app.dataSources.defaultDS.entities.NeteaselawInteriorORexternal.logics.create']({
            config: {
              download: false,
            },
            query: {},
            headers: {},

            body: item
          }))
        }
      }

      return;
    }
    ,

    async companyCode() {
      let variable1 = undefined;
      let variable2 = undefined;
      let variable3 = undefined;
      let variable4 = undefined;
      let variable5 = undefined;
      let companyCode1 = undefined;
      let returncompanyCode = this.$genInitFromSchema('{list: nasl.collection.List<{neteaselawCompany: app.dataSources.defaultDS.entities.NeteaselawCompany}>, total: nasl.core.Integer}', undefined);
      let variable6 = undefined;

      /* 生成唯一companyCode公司编码，时间戳加随机数，时间戳10位，随机数8+7+4 */
      variable6 = false
      while ((variable6) == (false)) {
        variable1 = this.$utils['CurrDateTime']()
        variable2 = this.$utils['Convert'](variable1, {
          "concept": "TypeAnnotation",
          "changedTime": null,
          "branchName": null,
          "workingCopy": null,
          "branch": null,
          "name": "",
          "typeKind": "primitive",
          "typeNamespace": "nasl.core",
          "typeName": "Long",
          "typeArguments": null,
          "returnType": null,
          "inferred": null,
          "properties": null,
          "ruleMap": null
        })
        variable3 = this.$utils['RandomInt'](11111111, 99999999)
        variable4 = this.$utils['RandomInt'](1111111, 9999999)
        variable5 = this.$utils['RandomInt'](1111, 9999)
        companyCode1 = this.$global.add(this.$utils['Convert'](variable2, {
          "concept": "TypeAnnotation",
          "changedTime": null,
          "branchName": null,
          "workingCopy": null,
          "branch": null,
          "name": "",
          "typeKind": "primitive",
          "typeNamespace": "nasl.core",
          "typeName": "String",
          "typeArguments": null,
          "returnType": null,
          "inferred": null,
          "properties": null,
          "ruleMap": null
        }), this.$global.add(this.$utils['Convert'](variable3, {
          "concept": "TypeAnnotation",
          "changedTime": null,
          "branchName": null,
          "workingCopy": null,
          "branch": null,
          "name": "",
          "typeKind": "primitive",
          "typeNamespace": "nasl.core",
          "typeName": "String",
          "typeArguments": null,
          "returnType": null,
          "inferred": null,
          "properties": null,
          "ruleMap": null
        }), this.$global.add(this.$utils['Convert'](variable4, {
          "concept": "TypeAnnotation",
          "changedTime": null,
          "branchName": null,
          "workingCopy": null,
          "branch": null,
          "name": "",
          "typeKind": "primitive",
          "typeNamespace": "nasl.core",
          "typeName": "String",
          "typeArguments": null,
          "returnType": null,
          "inferred": null,
          "properties": null,
          "ruleMap": null
        }), this.$utils['Convert'](variable5, {
          "concept": "TypeAnnotation",
          "changedTime": null,
          "branchName": null,
          "workingCopy": null,
          "branch": null,
          "name": "",
          "typeKind": "primitive",
          "typeNamespace": "nasl.core",
          "typeName": "String",
          "typeArguments": null,
          "returnType": null,
          "inferred": null,
          "properties": null,
          "ruleMap": null
        }))))
        returncompanyCode = this.$genInitFromSchema('{list: nasl.collection.List<{neteaselawCompany: app.dataSources.defaultDS.entities.NeteaselawCompany}>, total: nasl.core.Integer}', await this.$logics['app.logics.getcompantCode']({
          config: {
            download: false,
          },
          query: {},
          headers: {},
          path: {},
          body: {
            compantCode: companyCode1
          }
        }))
        if (((returncompanyCode || {}).total) == (0)) {
          this.neteaselawCompany.companyCode = companyCode1
          variable6 = true
        } else {
        }

      }

      return;
    }
    ,

    async loadSelect(params) {
      params = this.$genInitFromSchema('nasl.ui.DataSourceParams', params || (this.$route.query.hasOwnProperty('params') ? this.$genInitFromSchema('nasl.ui.DataSourceParams', this.$route.query.params) : ""));
      let result = this.$genInitFromSchema('{list: nasl.collection.List<{neteaselawCurrency: app.dataSources.defaultDS.entities.NeteaselawCurrency}>, total: nasl.core.Integer}', undefined);

      result = this.$genInitFromSchema('{list: nasl.collection.List<{neteaselawCurrency: app.dataSources.defaultDS.entities.NeteaselawCurrency}>, total: nasl.core.Integer}', await this.$logics['app.logics.loadCompanySelect']({
        config: {
          download: false,
        },
        query: {},
        headers: {},
        path: {},
        body: {
          page: (params || {}).page,
          size: (params || {}).size,
          name: (params || {}).filterText
        }
      }))
      await console.log(result)
      return result;
    }
    ,

    async registered1() {

      if (((this.neteaselawCompany || {}).registeredCapitalCurrency) == ('CNY')) {
        this.neteaselawCompany.registeredCapital = this.registered
      } else {
        this.neteaselawCompany.registeredCapitalCNY = this.registered
        this.neteaselawCompany.registeredCapital = this.registeredCNY
      }

      if (((this.neteaselawCompany || {}).contributedCapitalCurrency) == ('CNY')) {
        this.neteaselawCompany.contributedCapital = this.contributed
      } else {
        this.neteaselawCompany.contributedCapitalCurrencyCNY = this.contributed
        this.neteaselawCompany.contributedCapital = this.contributedCNY
      }

      return;
    }
    ,

    async loadSelect1(params) {
      params = this.$genInitFromSchema('nasl.ui.DataSourceParams', params || (this.$route.query.hasOwnProperty('params') ? this.$genInitFromSchema('nasl.ui.DataSourceParams', this.$route.query.params) : ""));
      let result = this.$genInitFromSchema('{list: nasl.collection.List<{neteaselawCompany: app.dataSources.defaultDS.entities.NeteaselawCompany}>, total: nasl.core.Integer}', undefined);

      result = this.$genInitFromSchema('{list: nasl.collection.List<{neteaselawCompany: app.dataSources.defaultDS.entities.NeteaselawCompany}>, total: nasl.core.Integer}', await this.$logics['app.logics.loadCompanySelect1']({
        config: {
          download: false,
        },
        query: {},
        headers: {},
        path: {},
        body: {
          page: (params || {}).page,
          size: (params || {}).size,
          firterName: (params || {}).filterText
        }
      }))
      return result;
    }
    ,

    async loadSelect6(params) {
      params = this.$genInitFromSchema('nasl.ui.DataSourceParams', params || (this.$route.query.hasOwnProperty('params') ? this.$genInitFromSchema('nasl.ui.DataSourceParams', this.$route.query.params) : ""));
      let result = this.$genInitFromSchema('{list: nasl.collection.List<{ehrTrainDeptV: app.dataSources.defaultDS.entities.EhrTrainDeptV}>, total: nasl.core.Integer}', undefined);

      result = this.$genInitFromSchema('{list: nasl.collection.List<{ehrTrainDeptV: app.dataSources.defaultDS.entities.EhrTrainDeptV}>, total: nasl.core.Integer}', await this.$logics['app.logics.loadCompanySelect6']({
        config: {
          download: false,
        },
        query: {},
        headers: {},
        path: {},
        body: {
          page: (params || {}).page,
          size: (params || {}).size
        }
      }))
      return result;
    }
    ,

    async loadSelect11(params) {
      params = this.$genInitFromSchema('nasl.ui.DataSourceParams', params || (this.$route.query.hasOwnProperty('params') ? this.$genInitFromSchema('nasl.ui.DataSourceParams', this.$route.query.params) : ""));
      let result = this.$genInitFromSchema('{list: nasl.collection.List<{neteaselawCompany: app.dataSources.defaultDS.entities.NeteaselawCompany}>, total: nasl.core.Integer}', undefined);

      result = this.$genInitFromSchema('{list: nasl.collection.List<{neteaselawCompany: app.dataSources.defaultDS.entities.NeteaselawCompany}>, total: nasl.core.Integer}', await this.$logics['app.logics.loadCompanySelect11']({
        config: {
          download: false,
        },
        query: {},
        headers: {},
        path: {},
        body: {
          page: (params || {}).page,
          size: (params || {}).size,
          firterName: (params || {}).filterText
        }
      }))
      return result;
    }
    ,

    async loadSelect12(params) {
      params = this.$genInitFromSchema('nasl.ui.DataSourceParams', params || (this.$route.query.hasOwnProperty('params') ? this.$genInitFromSchema('nasl.ui.DataSourceParams', this.$route.query.params) : ""));
      let result = this.$genInitFromSchema('{list: nasl.collection.List<{neteaselawCompany: app.dataSources.defaultDS.entities.NeteaselawCompany}>, total: nasl.core.Integer}', undefined);

      result = this.$genInitFromSchema('{list: nasl.collection.List<{neteaselawCompany: app.dataSources.defaultDS.entities.NeteaselawCompany}>, total: nasl.core.Integer}', await this.$logics['app.logics.loadCompanySelect12']({
        config: {
          download: false,
        },
        query: {},
        headers: {},
        path: {},
        body: {
          page: (params || {}).page,
          size: (params || {}).size,
          firterText: (params || {}).filterText
        }
      }))
      return result;
    }
    ,

    async createChangeRecord(guid1) {
      guid1 = guid1 || (this.$route.query.hasOwnProperty('guid1') ? this.$genInitFromSchema('nasl.core.Long', this.$route.query.guid1) : "");
      let variable1 = this.$genInitFromSchema('app.dataSources.defaultDS.entities.NeteaselawChangeRecord', undefined);

      variable1.changeType = '公司信息变更'
      variable1.companyCode = (this.neteaselawCompany || {}).companyCode
      variable1.cid = guid1
      variable1.companyName = (this.neteaselawCompany || {}).companyName
      variable1.changeField = '新增操作'
      variable1.changeLater = '新增成功'
      variable1.changeDate = this.$utils['CurrDate']()
      variable1.operator = (this.$global.userInfo || {}).UserName
      this.$genInitFromSchema('app.dataSources.defaultDS.entities.NeteaselawChangeRecord', await this.$logics['app.dataSources.defaultDS.entities.NeteaselawChangeRecord.logics.create']({
        config: {
          download: false,
        },
        query: {},
        headers: {},

        body: variable1
      }))
      return;
    }
    ,

    async updateNeteaselawChangeRecord() {
      let variable1 = this.$genInitFromSchema('app.dataSources.defaultDS.entities.NeteaselawChangeRecord', undefined);
      let variable2 = this.$genInitFromSchema('{list: nasl.collection.List<{neteaselawCompany: app.dataSources.defaultDS.entities.NeteaselawCompany}>, total: nasl.core.Integer}', undefined);
      let variable3 = this.$genInitFromSchema('{neteaselawCompany: app.dataSources.defaultDS.entities.NeteaselawCompany}', undefined);
      let variable5 = this.$genInitFromSchema('{neteaselawLicenceCategory: app.dataSources.defaultDS.entities.NeteaselawLicenceCategory}', undefined);
      let getCompany = this.$genInitFromSchema('app.dataSources.defaultDS.entities.NeteaselawCompany', undefined);
      let zancun = undefined;
      let zancun1 = undefined;
      let clear = this.$genInitFromSchema('app.dataSources.defaultDS.entities.NeteaselawChangeRecord', undefined);
      let returnChangeRecord1 = this.$genInitFromSchema('{list: nasl.collection.List<{neteaselawContributedCapital: app.dataSources.defaultDS.entities.NeteaselawContributedCapital}>, total: nasl.core.Integer}', undefined);
      let zancun3 = undefined;
      let zancun4 = undefined;
      let variable6 = undefined;
      let datetime1 = undefined;
      let datetime2 = undefined;
      let variable4 = undefined;

      this.updateRecord = undefined
      zancun = undefined
      zancun1 = undefined
      zancun3 = undefined
      zancun4 = undefined
      variable1 = this.$genInitFromSchema('app.dataSources.defaultDS.entities.NeteaselawChangeRecord', this.$utils['Clone'](clear))
      variable1.changeType = '公司信息变更'
      variable1.cid = this.guid
      variable2 = this.$genInitFromSchema('{list: nasl.collection.List<{neteaselawCompany: app.dataSources.defaultDS.entities.NeteaselawCompany}>, total: nasl.core.Integer}', await this.$logics['app.logics.loadCompnyguid']({
        config: {
          download: false,
        },
        query: {},
        headers: {},
        path: {},
        body: {
          guid: (this.neteaselawCompany || {}).guid
        }
      }))
      variable3 = this.$genInitFromSchema('{neteaselawCompany: app.dataSources.defaultDS.entities.NeteaselawCompany}', this.$utils['Get']((variable2 || {}).list, 0))
      variable1.companyCode = ((variable3 || {}).neteaselawCompany || {}).companyCode
      variable1.companyName = ((variable3 || {}).neteaselawCompany || {}).companyName
      variable1.operator = (this.$global.userInfo || {}).UserName
      variable1.changeDate = this.$utils['CurrDate']()
      getCompany = this.$genInitFromSchema('app.dataSources.defaultDS.entities.NeteaselawCompany', await this.$logics['app.dataSources.defaultDS.entities.NeteaselawCompany.logics.get']({
        config: {
          download: false,
        },
        query: {},
        headers: {},
        query: {
          guid: this.guid
        },
        body: {}
      }))
      /* 财务编码暂空 */
      if (((getCompany || {}).companyStatus) != ((this.neteaselawCompany || {}).companyStatus)) {
        variable1.changeField = '公司状态'
        variable1.changeFront = this.$utils['EnumValueToText']((getCompany || {}).companyStatus, {
          "concept": "TypeAnnotation",
          "name": "",
          "typeKind": "reference",
          "typeNamespace": "app.enums",
          "typeName": "CompanyStatus",
          "typeArguments": null,
          "returnType": null,
          "properties": null
        })
        variable1.changeLater = this.$utils['EnumValueToText']((this.neteaselawCompany || {}).companyStatus, {
          "concept": "TypeAnnotation",
          "name": "",
          "typeKind": "reference",
          "typeNamespace": "app.enums",
          "typeName": "CompanyStatus",
          "typeArguments": null,
          "returnType": null,
          "properties": null
        })
        this.$genInitFromSchema('app.dataSources.defaultDS.entities.NeteaselawChangeRecord', await this.$logics['app.dataSources.defaultDS.entities.NeteaselawChangeRecord.logics.create']({
          config: {
            download: false,
          },
          query: {},
          headers: {},

          body: variable1
        }))
        if ((this.updateRecord) == (undefined)) {
          this.updateRecord = (variable1 || {}).changeField
        } else {
          this.updateRecord = this.$global.add(this.updateRecord, this.$global.add('，', (variable1 || {}).changeField))
        }

      } else {
      }

      if (((getCompany || {}).companyAttribute) != ((this.neteaselawCompany || {}).companyAttribute)) {
        variable1.changeField = '公司性质'
        variable1.changeFront = this.$utils['EnumValueToText']((getCompany || {}).companyAttribute, {
          "concept": "TypeAnnotation",
          "name": "",
          "typeKind": "reference",
          "typeNamespace": "app.enums",
          "typeName": "CompanyAttribute",
          "typeArguments": null,
          "returnType": null,
          "properties": null
        })
        variable1.changeLater = this.$utils['EnumValueToText']((this.neteaselawCompany || {}).companyAttribute, {
          "concept": "TypeAnnotation",
          "name": "",
          "typeKind": "reference",
          "typeNamespace": "app.enums",
          "typeName": "CompanyAttribute",
          "typeArguments": null,
          "returnType": null,
          "properties": null
        })
        this.$genInitFromSchema('app.dataSources.defaultDS.entities.NeteaselawChangeRecord', await this.$logics['app.dataSources.defaultDS.entities.NeteaselawChangeRecord.logics.create']({
          config: {
            download: false,
          },
          query: {},
          headers: {},

          body: variable1
        }))
        if ((this.updateRecord) == (undefined)) {
          this.updateRecord = (variable1 || {}).changeField
        } else {
          this.updateRecord = this.$global.add(this.updateRecord, this.$global.add('，', (variable1 || {}).changeField))
        }

      } else {
      }

      if (((getCompany || {}).controllingSubject) != ((this.neteaselawCompany || {}).controllingSubject)) {
        variable1.changeField = '控制主体'
        variable1.changeFront = (getCompany || {}).controllingSubject
        variable1.changeLater = (this.neteaselawCompany || {}).controllingSubject
        this.$genInitFromSchema('app.dataSources.defaultDS.entities.NeteaselawChangeRecord', await this.$logics['app.dataSources.defaultDS.entities.NeteaselawChangeRecord.logics.create']({
          config: {
            download: false,
          },
          query: {},
          headers: {},

          body: variable1
        }))
        if ((this.updateRecord) == (undefined)) {
          this.updateRecord = (variable1 || {}).changeField
        } else {
          this.updateRecord = this.$global.add(this.updateRecord, this.$global.add('，', (variable1 || {}).changeField))
        }

      } else {
      }

      if (((getCompany || {}).headOffice) != ((this.neteaselawCompany || {}).headOffice)) {
        variable1.changeField = '总公司'
        variable1.changeFront = (getCompany || {}).headOffice
        variable1.changeLater = (this.neteaselawCompany || {}).headOffice
        this.$genInitFromSchema('app.dataSources.defaultDS.entities.NeteaselawChangeRecord', await this.$logics['app.dataSources.defaultDS.entities.NeteaselawChangeRecord.logics.create']({
          config: {
            download: false,
          },
          query: {},
          headers: {},

          body: variable1
        }))
        if ((this.updateRecord) == (undefined)) {
          this.updateRecord = (variable1 || {}).changeField
        } else {
          this.updateRecord = this.$global.add(this.updateRecord, this.$global.add('，', (variable1 || {}).changeField))
        }

      } else {
      }

      if (((getCompany || {}).businessFirstOrg) != ((this.neteaselawCompany || {}).businessFirstOrg)) {
        variable1.changeField = '所属BU'
        variable1.changeFront = (getCompany || {}).businessFirstOrg
        variable1.changeLater = (this.neteaselawCompany || {}).businessFirstOrg
        this.$genInitFromSchema('app.dataSources.defaultDS.entities.NeteaselawChangeRecord', await this.$logics['app.dataSources.defaultDS.entities.NeteaselawChangeRecord.logics.create']({
          config: {
            download: false,
          },
          query: {},
          headers: {},

          body: variable1
        }))
        if ((this.updateRecord) == (undefined)) {
          this.updateRecord = (variable1 || {}).changeField
        } else {
          this.updateRecord = this.$global.add(this.updateRecord, this.$global.add('，', (variable1 || {}).changeField))
        }

      } else {
      }

      if (((getCompany || {}).dateOfIncorporation) != (undefined)) {
        datetime1 = this.$utils['FormatDateTime']((getCompany || {}).dateOfIncorporation, 'yyyy-MM-dd')
      } else {
      }

      if ((this.companyDateOfEstablishment) != (undefined)) {
        datetime2 = this.$utils['FormatDate'](this.companyDateOfEstablishment, 'yyyy-MM-dd')
      } else {
      }

      if ((datetime1) != (datetime2)) {
        variable1.changeField = '公司成立日期'
        variable1.changeFront = datetime1
        variable1.changeLater = datetime2
        this.$genInitFromSchema('app.dataSources.defaultDS.entities.NeteaselawChangeRecord', await this.$logics['app.dataSources.defaultDS.entities.NeteaselawChangeRecord.logics.create']({
          config: {
            download: false,
          },
          query: {},
          headers: {},

          body: variable1
        }))
        if ((this.updateRecord) == (undefined)) {
          this.updateRecord = (variable1 || {}).changeField
        } else {
          this.updateRecord = this.$global.add(this.updateRecord, this.$global.add('，', (variable1 || {}).changeField))
        }

      } else {
      }

      if ((this.$global.add((getCompany || {}).companyCountry, (getCompany || {}).companyAddress)) != (this.$global.add((this.neteaselawCompany || {}).companyCountry, (this.neteaselawCompany || {}).companyAddress))) {
        variable1.changeField = '公司注册地'
        if ((((getCompany || {}).companyCountry) == (undefined)) && (((getCompany || {}).companyAddress) == (undefined))) {
          variable1.changeFront = ''
        } else if ((((getCompany || {}).companyCountry) != (undefined)) && (((getCompany || {}).companyAddress) == (undefined))) {
          variable1.changeFront = (getCompany || {}).companyCountry
        } else if ((((getCompany || {}).companyCountry) != (undefined)) && (((getCompany || {}).companyAddress) != (undefined))) {
          variable1.changeFront = this.$global.add((getCompany || {}).companyCountry, (getCompany || {}).companyAddress)
        } else {
        }

        if ((((this.neteaselawCompany || {}).companyCountry) == (undefined)) && (((this.neteaselawCompany || {}).companyAddress) == (undefined))) {
          variable1.changeLater = ''
        } else if ((((this.neteaselawCompany || {}).companyCountry) != (undefined)) && (((this.neteaselawCompany || {}).companyAddress) == (undefined))) {
          variable1.changeLater = (this.neteaselawCompany || {}).companyCountry
        } else if ((((this.neteaselawCompany || {}).companyCountry) != (undefined)) && (((this.neteaselawCompany || {}).companyAddress) != (undefined))) {
          variable1.changeLater = this.$global.add((this.neteaselawCompany || {}).companyCountry, (this.neteaselawCompany || {}).companyAddress)
        } else {
        }

        this.$genInitFromSchema('app.dataSources.defaultDS.entities.NeteaselawChangeRecord', await this.$logics['app.dataSources.defaultDS.entities.NeteaselawChangeRecord.logics.create']({
          config: {
            download: false,
          },
          query: {},
          headers: {},

          body: variable1
        }))
        if ((this.updateRecord) == (undefined)) {
          this.updateRecord = (variable1 || {}).changeField
        } else {
          this.updateRecord = this.$global.add(this.updateRecord, this.$global.add('，', (variable1 || {}).changeField))
        }

      } else {
      }

      if (((getCompany || {}).companyAddressDetails) != ((this.neteaselawCompany || {}).companyAddressDetails)) {
        variable1.changeField = '公司详细地址'
        variable1.changeFront = (getCompany || {}).companyAddressDetails
        variable1.changeLater = (this.neteaselawCompany || {}).companyAddressDetails
        this.$genInitFromSchema('app.dataSources.defaultDS.entities.NeteaselawChangeRecord', await this.$logics['app.dataSources.defaultDS.entities.NeteaselawChangeRecord.logics.create']({
          config: {
            download: false,
          },
          query: {},
          headers: {},

          body: variable1
        }))
        if ((this.updateRecord) == (undefined)) {
          this.updateRecord = (variable1 || {}).changeField
        } else {
          this.updateRecord = this.$global.add(this.updateRecord, this.$global.add('，', (variable1 || {}).changeField))
        }

      } else {
      }

      /* 判断股东 */
      if (Array.isArray((this.return1NeteaselawShareholder1 || {}).list)) {
        for (let index = 0; index < (((this.return1NeteaselawShareholder1 || {}).list || {}).length); index++) {
          const item = ((this.return1NeteaselawShareholder1 || {}).list)[index];
          if ((zancun) == (undefined)) {
            zancun = this.$global.add(this.$utils['EnumValueToText'](((item || {}).neteaselawShareholder || {}).shareholder, {
              "concept": "TypeAnnotation",
              "name": "",
              "typeKind": "reference",
              "typeNamespace": "app.enums",
              "typeName": "Shareholder",
              "typeArguments": null,
              "returnType": null,
              "properties": null
            }), this.$global.add(this.$global.add('，', ((item || {}).neteaselawShareholder || {}).shareholderName), this.$global.add('，', this.$global.add(((item || {}).neteaselawShareholder || {}).shareholdingRatio, '%'))))
          } else {
            zancun = this.$global.add(zancun, this.$global.add(' / ', this.$global.add(this.$global.add('，', this.$utils['EnumValueToText'](((item || {}).neteaselawShareholder || {}).shareholder, {
              "concept": "TypeAnnotation",
              "name": "",
              "typeKind": "reference",
              "typeNamespace": "app.enums",
              "typeName": "Shareholder",
              "typeArguments": null,
              "returnType": null,
              "properties": null
            })), this.$global.add(this.$global.add('，', ((item || {}).neteaselawShareholder || {}).shareholderName), this.$global.add('，', this.$global.add(((item || {}).neteaselawShareholder || {}).shareholdingRatio, '%'))))))
          }

        }
      }

      if (Array.isArray(this.listNeteaselawShareholder)) {
        for (let index = 0; index < ((this.listNeteaselawShareholder || {}).length); index++) {
          const item = (this.listNeteaselawShareholder)[index];
          if ((((item || {}).shareholderNameEmail || {}).shareholderNameEmail) == ('其他')) {
            item.shareholderName = (item || {}).userDefined
            item.userDefined = '其他'
            item.shareholderNameEmail.shareholderNameEmail = undefined
          } else {
          }

          if (((item || {}).shareholder) == ("2")) {
            item.shareholderName = (item || {}).userDefined
          } else {
          }

          if ((zancun1) == (undefined)) {
            zancun1 = this.$global.add(this.$utils['EnumValueToText']((item || {}).shareholder, {
              "concept": "TypeAnnotation",
              "name": "",
              "typeKind": "reference",
              "typeNamespace": "app.enums",
              "typeName": "Shareholder",
              "typeArguments": null,
              "returnType": null,
              "properties": null
            }), this.$global.add(this.$global.add('，', (item || {}).shareholderName), this.$global.add('，', this.$global.add((item || {}).shareholdingRatio, '%'))))
          } else {
            zancun1 = this.$global.add(zancun1, this.$global.add(' / ', this.$global.add(this.$global.add('，', this.$utils['EnumValueToText']((item || {}).shareholder, {
              "concept": "TypeAnnotation",
              "name": "",
              "typeKind": "reference",
              "typeNamespace": "app.enums",
              "typeName": "Shareholder",
              "typeArguments": null,
              "returnType": null,
              "properties": null
            })), this.$global.add(this.$global.add('，', (item || {}).shareholderName), this.$global.add('，', this.$global.add((item || {}).shareholdingRatio, '%'))))))
          }

        }
      }

      if ((zancun) != (zancun1)) {
        variable1.changeField = '股东'
        variable1.changeFront = zancun
        variable1.changeLater = zancun1
        this.$genInitFromSchema('app.dataSources.defaultDS.entities.NeteaselawChangeRecord', await this.$logics['app.dataSources.defaultDS.entities.NeteaselawChangeRecord.logics.create']({
          config: {
            download: false,
          },
          query: {},
          headers: {},

          body: variable1
        }))
        if ((this.updateRecord) == (undefined)) {
          this.updateRecord = (variable1 || {}).changeField
        } else {
          this.updateRecord = this.$global.add(this.updateRecord, this.$global.add('，', (variable1 || {}).changeField))
        }

      } else {
      }

      if (this.$utils['Convert']((getCompany || {}).registeredCapital, {
        "concept": "TypeAnnotation",
        "name": "",
        "typeKind": "primitive",
        "typeNamespace": "nasl.core",
        "typeName": "Boolean",
        "typeArguments": null,
        "returnType": null,
        "properties": null
      })) {
      } else {
        getCompany.registeredCapital = variable4
      }

      if (this.$utils['Convert']((getCompany || {}).registeredCapitalCNY, {
        "concept": "TypeAnnotation",
        "name": "",
        "typeKind": "primitive",
        "typeNamespace": "nasl.core",
        "typeName": "Boolean",
        "typeArguments": null,
        "returnType": null,
        "properties": null
      })) {
      } else {
        getCompany.registeredCapitalCNY = variable4
      }

      if ((this.$global.add((getCompany || {}).registeredCapital, this.$global.add((getCompany || {}).registeredCapitalCurrency, (getCompany || {}).registeredCapitalCNY))) != (this.$global.add(this.registered, this.$global.add((this.neteaselawCompany || {}).registeredCapitalCurrency, this.registeredCNY)))) {
        variable1.changeField = '注册资本'
        if ((((getCompany || {}).registeredCapital) != (undefined)) && (((getCompany || {}).registeredCapitalCurrency) == ('CNY'))) {
          variable1.changeFront = this.$global.add((getCompany || {}).registeredCapital, (getCompany || {}).registeredCapitalCurrency)
        } else if ((((getCompany || {}).registeredCapital) != (undefined)) && ((((getCompany || {}).registeredCapitalCurrency) != ('CNY')) && (((getCompany || {}).registeredCapitalCNY) == (undefined)))) {
          variable1.changeFront = this.$global.add((getCompany || {}).registeredCapital, (getCompany || {}).registeredCapitalCurrency)
        } else if ((((getCompany || {}).registeredCapital) != (undefined)) && ((((getCompany || {}).registeredCapitalCurrency) != ('CNY')) && (((getCompany || {}).registeredCapitalCNY) != (undefined)))) {
          variable1.changeFront = this.$global.add((getCompany || {}).registeredCapital, this.$global.add((getCompany || {}).registeredCapitalCurrency, (getCompany || {}).registeredCapitalCNY))
        } else {
        }

        if (((this.registered) != (undefined)) && (((this.neteaselawCompany || {}).registeredCapitalCurrency) == ('CNY'))) {
          variable1.changeLater = this.$global.add(this.registered, (this.neteaselawCompany || {}).registeredCapitalCurrency)
        } else if (((this.registered) != (undefined)) && ((((this.neteaselawCompany || {}).registeredCapitalCurrency) != ('CNY')) && ((this.registeredCNY) == (undefined)))) {
          variable1.changeLater = this.$global.add(this.registered, (this.neteaselawCompany || {}).registeredCapitalCurrency)
        } else if (((this.registered) != (undefined)) && ((((this.neteaselawCompany || {}).registeredCapitalCurrency) != ('CNY')) && ((this.registeredCNY) != (undefined)))) {
          variable1.changeLater = this.$global.add(this.registered, this.$global.add((this.neteaselawCompany || {}).registeredCapitalCurrency, this.registeredCNY))
        } else {
        }

        this.$genInitFromSchema('app.dataSources.defaultDS.entities.NeteaselawChangeRecord', await this.$logics['app.dataSources.defaultDS.entities.NeteaselawChangeRecord.logics.create']({
          config: {
            download: false,
          },
          query: {},
          headers: {},

          body: variable1
        }))
        if ((this.updateRecord) == (undefined)) {
          this.updateRecord = (variable1 || {}).changeField
        } else {
          this.updateRecord = this.$global.add(this.updateRecord, this.$global.add('，', (variable1 || {}).changeField))
        }

      } else {
      }

      /* 判断实缴资本情况 */
      returnChangeRecord1 = this.$genInitFromSchema('{list: nasl.collection.List<{neteaselawContributedCapital: app.dataSources.defaultDS.entities.NeteaselawContributedCapital}>, total: nasl.core.Integer}', await this.$logics['app.logics.getContributedCapital']({
        config: {
          download: false,
        },
        query: {},
        headers: {},
        path: {},
        body: {
          cid: this.guid
        }
      }))
      if (Array.isArray((returnChangeRecord1 || {}).list)) {
        for (let index = 0; index < (((returnChangeRecord1 || {}).list || {}).length); index++) {
          const item = ((returnChangeRecord1 || {}).list)[index];
          if ((zancun3) == (undefined)) {
            zancun3 = this.$global.add(((item || {}).neteaselawContributedCapital || {}).investor, this.$global.add('，', this.$global.add(this.$utils['FormatDate'](((item || {}).neteaselawContributedCapital || {}).investorData, 'yyyy-MM-dd'), this.$global.add('，', this.$global.add(((item || {}).neteaselawContributedCapital || {}).investorName, this.$global.add(this.$global.add('，', ((item || {}).neteaselawContributedCapital || {}).originalCurrency), this.$global.add(this.$global.add('，', ((item || {}).neteaselawContributedCapital || {}).registeredCurrency), this.$global.add('，', ((item || {}).neteaselawContributedCapital || {}).cNY))))))))
          } else {
            zancun3 = this.$global.add(zancun3, this.$global.add(' / ', this.$global.add(((item || {}).neteaselawContributedCapital || {}).investor, this.$global.add('，', this.$global.add(this.$utils['FormatDate'](((item || {}).neteaselawContributedCapital || {}).investorData, 'yyyy-MM-dd'), this.$global.add('，', this.$global.add(((item || {}).neteaselawContributedCapital || {}).investorName, this.$global.add(this.$global.add('，', ((item || {}).neteaselawContributedCapital || {}).originalCurrency), this.$global.add(this.$global.add('，', ((item || {}).neteaselawContributedCapital || {}).registeredCurrency), this.$global.add('，', ((item || {}).neteaselawContributedCapital || {}).cNY))))))))))
          }

        }
      }

      if (Array.isArray(this.listContributedCapital)) {
        for (let index = 0; index < ((this.listContributedCapital || {}).length); index++) {
          const item = (this.listContributedCapital)[index];
          if ((zancun4) == (undefined)) {
            zancun4 = this.$global.add((item || {}).investor, this.$global.add('，', this.$global.add(this.$utils['FormatDate']((item || {}).investorData, 'yyyy-MM-dd'), this.$global.add('，', this.$global.add((item || {}).investorName, this.$global.add(this.$global.add('，', (item || {}).originalCurrency), this.$global.add(this.$global.add('，', (item || {}).registeredCurrency), this.$global.add('，', (item || {}).cNY))))))))
          } else {
            zancun4 = this.$global.add(zancun4, this.$global.add(' / ', this.$global.add((item || {}).investor, this.$global.add('，', this.$global.add(this.$utils['FormatDate']((item || {}).investorData, 'yyyy-MM-dd'), this.$global.add('，', this.$global.add((item || {}).investorName, this.$global.add(this.$global.add('，', (item || {}).originalCurrency), this.$global.add(this.$global.add('，', (item || {}).registeredCurrency), this.$global.add('，', (item || {}).cNY))))))))))
          }

        }
      }

      if ((zancun3) != (zancun4)) {
        variable1.changeField = '实缴资本'
        variable1.changeFront = zancun3
        variable1.changeLater = zancun4
        this.$genInitFromSchema('app.dataSources.defaultDS.entities.NeteaselawChangeRecord', await this.$logics['app.dataSources.defaultDS.entities.NeteaselawChangeRecord.logics.create']({
          config: {
            download: false,
          },
          query: {},
          headers: {},

          body: variable1
        }))
        if ((this.updateRecord) == (undefined)) {
          this.updateRecord = (variable1 || {}).changeField
        } else {
          this.updateRecord = this.$global.add(this.updateRecord, this.$global.add('，', (variable1 || {}).changeField))
        }

      } else {
      }

      if (((getCompany || {}).awaitRegisteredCapital) != ((this.neteaselawCompany || {}).awaitRegisteredCapital)) {
        variable1.changeField = '待出资注册资本'
        variable1.changeFront = this.$utils['Convert']((getCompany || {}).awaitRegisteredCapital, {
          "concept": "TypeAnnotation",
          "changedTime": null,
          "branchName": null,
          "workingCopy": null,
          "branch": null,
          "name": "",
          "typeKind": "primitive",
          "typeNamespace": "nasl.core",
          "typeName": "String",
          "typeArguments": null,
          "returnType": null,
          "inferred": null,
          "properties": null,
          "ruleMap": null
        })
        variable1.changeLater = this.$utils['Convert']((this.neteaselawCompany || {}).awaitRegisteredCapital, {
          "concept": "TypeAnnotation",
          "changedTime": null,
          "branchName": null,
          "workingCopy": null,
          "branch": null,
          "name": "",
          "typeKind": "primitive",
          "typeNamespace": "nasl.core",
          "typeName": "String",
          "typeArguments": null,
          "returnType": null,
          "inferred": null,
          "properties": null,
          "ruleMap": null
        })
        this.$genInitFromSchema('app.dataSources.defaultDS.entities.NeteaselawChangeRecord', await this.$logics['app.dataSources.defaultDS.entities.NeteaselawChangeRecord.logics.create']({
          config: {
            download: false,
          },
          query: {},
          headers: {},

          body: variable1
        }))
        if ((this.updateRecord) == (undefined)) {
          this.updateRecord = (variable1 || {}).changeField
        } else {
          this.updateRecord = this.$global.add(this.updateRecord, this.$global.add('，', (variable1 || {}).changeField))
        }

      } else {
      }

      if (((getCompany || {}).legalPerson) != ((this.neteaselawCompany || {}).legalPerson)) {
        variable1.changeField = '法务负责人'
        variable1.changeFront = (getCompany || {}).legalPerson
        variable1.changeLater = (this.neteaselawCompany || {}).legalPerson
        this.$genInitFromSchema('app.dataSources.defaultDS.entities.NeteaselawChangeRecord', await this.$logics['app.dataSources.defaultDS.entities.NeteaselawChangeRecord.logics.create']({
          config: {
            download: false,
          },
          query: {},
          headers: {},

          body: variable1
        }))
        if ((this.updateRecord) == (undefined)) {
          this.updateRecord = (variable1 || {}).changeField
        } else {
          this.updateRecord = this.$global.add(this.updateRecord, this.$global.add('，', (variable1 || {}).changeField))
        }

      } else {
      }

      if (((getCompany || {}).legalRepresentative) != ((this.neteaselawCompany || {}).legalRepresentative)) {
        variable1.changeField = '法定代表人'
        variable1.changeFront = (getCompany || {}).legalRepresentative
        variable1.changeLater = (this.neteaselawCompany || {}).legalRepresentative
        this.$genInitFromSchema('app.dataSources.defaultDS.entities.NeteaselawChangeRecord', await this.$logics['app.dataSources.defaultDS.entities.NeteaselawChangeRecord.logics.create']({
          config: {
            download: false,
          },
          query: {},
          headers: {},

          body: variable1
        }))
        if ((this.updateRecord) == (undefined)) {
          this.updateRecord = (variable1 || {}).changeField
        } else {
          this.updateRecord = this.$global.add(this.updateRecord, this.$global.add('，', (variable1 || {}).changeField))
        }

      } else {
      }

      if (((getCompany || {}).unifiedSocialCreditCodes) != ((this.neteaselawCompany || {}).unifiedSocialCreditCodes)) {
        variable1.changeField = '统一社会信用代码'
        variable1.changeFront = (getCompany || {}).unifiedSocialCreditCodes
        variable1.changeLater = (this.neteaselawCompany || {}).unifiedSocialCreditCodes
        this.$genInitFromSchema('app.dataSources.defaultDS.entities.NeteaselawChangeRecord', await this.$logics['app.dataSources.defaultDS.entities.NeteaselawChangeRecord.logics.create']({
          config: {
            download: false,
          },
          query: {},
          headers: {},

          body: variable1
        }))
        if ((this.updateRecord) == (undefined)) {
          this.updateRecord = (variable1 || {}).changeField
        } else {
          this.updateRecord = this.$global.add(this.updateRecord, this.$global.add('，', (variable1 || {}).changeField))
        }

      } else {
      }

      if (((getCompany || {}).executiveCommittee) != ((this.neteaselawCompany || {}).executiveCommittee)) {
        variable1.changeField = '董事会/执行董事'
        variable1.changeFront = (getCompany || {}).executiveCommittee
        variable1.changeLater = (this.neteaselawCompany || {}).executiveCommittee
        this.$genInitFromSchema('app.dataSources.defaultDS.entities.NeteaselawChangeRecord', await this.$logics['app.dataSources.defaultDS.entities.NeteaselawChangeRecord.logics.create']({
          config: {
            download: false,
          },
          query: {},
          headers: {},

          body: variable1
        }))
        if ((this.updateRecord) == (undefined)) {
          this.updateRecord = (variable1 || {}).changeField
        } else {
          this.updateRecord = this.$global.add(this.updateRecord, this.$global.add('，', (variable1 || {}).changeField))
        }

      } else {
      }

      if (((getCompany || {}).president) != ((this.neteaselawCompany || {}).president)) {
        variable1.changeField = '(总)经理'
        variable1.changeFront = (getCompany || {}).president
        variable1.changeLater = (this.neteaselawCompany || {}).president
        this.$genInitFromSchema('app.dataSources.defaultDS.entities.NeteaselawChangeRecord', await this.$logics['app.dataSources.defaultDS.entities.NeteaselawChangeRecord.logics.create']({
          config: {
            download: false,
          },
          query: {},
          headers: {},

          body: variable1
        }))
        if ((this.updateRecord) == (undefined)) {
          this.updateRecord = (variable1 || {}).changeField
        } else {
          this.updateRecord = this.$global.add(this.updateRecord, this.$global.add('，', (variable1 || {}).changeField))
        }

      } else {
      }

      if (((getCompany || {}).supervisor) != ((this.neteaselawCompany || {}).supervisor)) {
        variable1.changeField = '监事'
        variable1.changeFront = (getCompany || {}).supervisor
        variable1.changeLater = (this.neteaselawCompany || {}).supervisor
        this.$genInitFromSchema('app.dataSources.defaultDS.entities.NeteaselawChangeRecord', await this.$logics['app.dataSources.defaultDS.entities.NeteaselawChangeRecord.logics.create']({
          config: {
            download: false,
          },
          query: {},
          headers: {},

          body: variable1
        }))
        if ((this.updateRecord) == (undefined)) {
          this.updateRecord = (variable1 || {}).changeField
        } else {
          this.updateRecord = this.$global.add(this.updateRecord, this.$global.add('，', (variable1 || {}).changeField))
        }

      } else {
      }

      /* 判断对外投资情况 */
      await this.getoutwardInvestment()
      if ((this.outwardInvestment) != (this.outwardInvestment1)) {
        variable1.changeField = '对外投资情况'
        variable1.changeFront = this.outwardInvestment
        variable1.changeLater = this.outwardInvestment1
        this.$genInitFromSchema('app.dataSources.defaultDS.entities.NeteaselawChangeRecord', await this.$logics['app.dataSources.defaultDS.entities.NeteaselawChangeRecord.logics.create']({
          config: {
            download: false,
          },
          query: {},
          headers: {},

          body: variable1
        }))
        if ((this.updateRecord) == (undefined)) {
          this.updateRecord = (variable1 || {}).changeField
        } else {
          this.updateRecord = this.$global.add(this.updateRecord, this.$global.add('，', (variable1 || {}).changeField))
        }

      } else {
      }

      if (((getCompany || {}).staffSize) != ((this.neteaselawCompany || {}).staffSize)) {
        variable1.changeField = '人员规模'
        variable1.changeFront = (getCompany || {}).staffSize
        variable1.changeLater = (this.neteaselawCompany || {}).staffSize
        this.$genInitFromSchema('app.dataSources.defaultDS.entities.NeteaselawChangeRecord', await this.$logics['app.dataSources.defaultDS.entities.NeteaselawChangeRecord.logics.create']({
          config: {
            download: false,
          },
          query: {},
          headers: {},

          body: variable1
        }))
        if ((this.updateRecord) == (undefined)) {
          this.updateRecord = (variable1 || {}).changeField
        } else {
          this.updateRecord = this.$global.add(this.updateRecord, this.$global.add('，', (variable1 || {}).changeField))
        }

      } else {
      }

      if (((getCompany || {}).insurednumber) != ((this.neteaselawCompany || {}).insurednumber)) {
        variable1.changeField = '参保人数'
        variable1.changeFront = (getCompany || {}).insurednumber
        variable1.changeLater = (this.neteaselawCompany || {}).insurednumber
        this.$genInitFromSchema('app.dataSources.defaultDS.entities.NeteaselawChangeRecord', await this.$logics['app.dataSources.defaultDS.entities.NeteaselawChangeRecord.logics.create']({
          config: {
            download: false,
          },
          query: {},
          headers: {},

          body: variable1
        }))
        if ((this.updateRecord) == (undefined)) {
          this.updateRecord = (variable1 || {}).changeField
        } else {
          this.updateRecord = this.$global.add(this.updateRecord, this.$global.add('，', (variable1 || {}).changeField))
        }

      } else {
      }

      if (((getCompany || {}).recordingCurrency) != ((this.neteaselawCompany || {}).recordingCurrency)) {
        variable1.changeField = '记账本位币'
        variable1.changeFront = (getCompany || {}).recordingCurrency
        variable1.changeLater = (this.neteaselawCompany || {}).recordingCurrency
        this.$genInitFromSchema('app.dataSources.defaultDS.entities.NeteaselawChangeRecord', await this.$logics['app.dataSources.defaultDS.entities.NeteaselawChangeRecord.logics.create']({
          config: {
            download: false,
          },
          query: {},
          headers: {},

          body: variable1
        }))
        if ((this.updateRecord) == (undefined)) {
          this.updateRecord = (variable1 || {}).changeField
        } else {
          this.updateRecord = this.$global.add(this.updateRecord, this.$global.add('，', (variable1 || {}).changeField))
        }

      } else {
      }

      if (((getCompany || {}).businessAccounting) != ((this.neteaselawCompany || {}).businessAccounting)) {
        variable1.changeField = '是否独立核算'
        variable1.changeFront = (getCompany || {}).businessAccounting
        variable1.changeLater = (this.neteaselawCompany || {}).businessAccounting
        this.$genInitFromSchema('app.dataSources.defaultDS.entities.NeteaselawChangeRecord', await this.$logics['app.dataSources.defaultDS.entities.NeteaselawChangeRecord.logics.create']({
          config: {
            download: false,
          },
          query: {},
          headers: {},

          body: variable1
        }))
        if ((this.updateRecord) == (undefined)) {
          this.updateRecord = (variable1 || {}).changeField
        } else {
          this.updateRecord = this.$global.add(this.updateRecord, this.$global.add('，', (variable1 || {}).changeField))
        }

      } else {
      }

      if (((getCompany || {}).financialStatement) != ((this.neteaselawCompany || {}).financialStatement)) {
        variable1.changeField = '是否编制个别财务报表'
        variable1.changeFront = (getCompany || {}).financialStatement
        variable1.changeLater = (this.neteaselawCompany || {}).financialStatement
        this.$genInitFromSchema('app.dataSources.defaultDS.entities.NeteaselawChangeRecord', await this.$logics['app.dataSources.defaultDS.entities.NeteaselawChangeRecord.logics.create']({
          config: {
            download: false,
          },
          query: {},
          headers: {},

          body: variable1
        }))
        if ((this.updateRecord) == (undefined)) {
          this.updateRecord = (variable1 || {}).changeField
        } else {
          this.updateRecord = this.$global.add(this.updateRecord, this.$global.add('，', (variable1 || {}).changeField))
        }

      } else {
      }

      if (((getCompany || {}).taxpayerType) != ((this.neteaselawCompany || {}).taxpayerType)) {
        variable1.changeField = '纳税人类型'
        variable1.changeFront = this.$utils['EnumValueToText']((getCompany || {}).taxpayerType, {
          "concept": "TypeAnnotation",
          "name": "",
          "typeKind": "reference",
          "typeNamespace": "app.enums",
          "typeName": "TaxpayerType",
          "typeArguments": null,
          "returnType": null,
          "properties": null
        })
        variable1.changeLater = this.$utils['EnumValueToText']((this.neteaselawCompany || {}).taxpayerType, {
          "concept": "TypeAnnotation",
          "name": "",
          "typeKind": "reference",
          "typeNamespace": "app.enums",
          "typeName": "TaxpayerType",
          "typeArguments": null,
          "returnType": null,
          "properties": null
        })
        this.$genInitFromSchema('app.dataSources.defaultDS.entities.NeteaselawChangeRecord', await this.$logics['app.dataSources.defaultDS.entities.NeteaselawChangeRecord.logics.create']({
          config: {
            download: false,
          },
          query: {},
          headers: {},

          body: variable1
        }))
        if ((this.updateRecord) == (undefined)) {
          this.updateRecord = (variable1 || {}).changeField
        } else {
          this.updateRecord = this.$global.add(this.updateRecord, this.$global.add('，', (variable1 || {}).changeField))
        }

      } else {
      }

      if (((getCompany || {}).taxpayeridentifyNumber) != ((this.neteaselawCompany || {}).taxpayeridentifyNumber)) {
        variable1.changeField = '纳税人识别号'
        variable1.changeFront = (getCompany || {}).taxpayeridentifyNumber
        variable1.changeLater = (this.neteaselawCompany || {}).taxpayeridentifyNumber
        this.$genInitFromSchema('app.dataSources.defaultDS.entities.NeteaselawChangeRecord', await this.$logics['app.dataSources.defaultDS.entities.NeteaselawChangeRecord.logics.create']({
          config: {
            download: false,
          },
          query: {},
          headers: {},

          body: variable1
        }))
        if ((this.updateRecord) == (undefined)) {
          this.updateRecord = (variable1 || {}).changeField
        } else {
          this.updateRecord = this.$global.add(this.updateRecord, this.$global.add('，', (variable1 || {}).changeField))
        }

      } else {
      }

      if (((getCompany || {}).site) != ((this.neteaselawCompany || {}).site)) {
        variable1.changeField = '地址'
        variable1.changeFront = (getCompany || {}).site
        variable1.changeLater = (this.neteaselawCompany || {}).site
        this.$genInitFromSchema('app.dataSources.defaultDS.entities.NeteaselawChangeRecord', await this.$logics['app.dataSources.defaultDS.entities.NeteaselawChangeRecord.logics.create']({
          config: {
            download: false,
          },
          query: {},
          headers: {},

          body: variable1
        }))
        if ((this.updateRecord) == (undefined)) {
          this.updateRecord = (variable1 || {}).changeField
        } else {
          this.updateRecord = this.$global.add(this.updateRecord, this.$global.add('，', (variable1 || {}).changeField))
        }

      } else {
      }

      if (((getCompany || {}).phone) != ((this.neteaselawCompany || {}).phone)) {
        variable1.changeField = '电话'
        variable1.changeFront = (getCompany || {}).phone
        variable1.changeLater = (this.neteaselawCompany || {}).phone
        this.$genInitFromSchema('app.dataSources.defaultDS.entities.NeteaselawChangeRecord', await this.$logics['app.dataSources.defaultDS.entities.NeteaselawChangeRecord.logics.create']({
          config: {
            download: false,
          },
          query: {},
          headers: {},

          body: variable1
        }))
        if ((this.updateRecord) == (undefined)) {
          this.updateRecord = (variable1 || {}).changeField
        } else {
          this.updateRecord = this.$global.add(this.updateRecord, this.$global.add('，', (variable1 || {}).changeField))
        }

      } else {
      }

      if (((getCompany || {}).openingBank) != ((this.neteaselawCompany || {}).openingBank)) {
        variable1.changeField = '开户行'
        variable1.changeFront = (getCompany || {}).openingBank
        variable1.changeLater = (this.neteaselawCompany || {}).openingBank
        this.$genInitFromSchema('app.dataSources.defaultDS.entities.NeteaselawChangeRecord', await this.$logics['app.dataSources.defaultDS.entities.NeteaselawChangeRecord.logics.create']({
          config: {
            download: false,
          },
          query: {},
          headers: {},

          body: variable1
        }))
        if ((this.updateRecord) == (undefined)) {
          this.updateRecord = (variable1 || {}).changeField
        } else {
          this.updateRecord = this.$global.add(this.updateRecord, this.$global.add('，', (variable1 || {}).changeField))
        }

      } else {
      }

      if (((getCompany || {}).account) != ((this.neteaselawCompany || {}).account)) {
        variable1.changeField = '账号'
        variable1.changeFront = (getCompany || {}).account
        variable1.changeLater = (this.neteaselawCompany || {}).account
        this.$genInitFromSchema('app.dataSources.defaultDS.entities.NeteaselawChangeRecord', await this.$logics['app.dataSources.defaultDS.entities.NeteaselawChangeRecord.logics.create']({
          config: {
            download: false,
          },
          query: {},
          headers: {},

          body: variable1
        }))
        if ((this.updateRecord) == (undefined)) {
          this.updateRecord = (variable1 || {}).changeField
        } else {
          this.updateRecord = this.$global.add(this.updateRecord, this.$global.add('，', (variable1 || {}).changeField))
        }

      } else {
      }

      return;
    }
    ,

    async getoutwardInvestment() {
      let returnoutwardInvestment = this.$genInitFromSchema('{list: nasl.collection.List<{neteaselawInteriorORexternal: app.dataSources.defaultDS.entities.NeteaselawInteriorORexternal}>, total: nasl.core.Integer}', undefined);
      let variable1 = undefined;
      let jsonStr = undefined;

      this.outwardInvestment = undefined
      this.outwardInvestment1 = undefined
      /* 查询所有投资情况并格式化 */
      returnoutwardInvestment = this.$genInitFromSchema('{list: nasl.collection.List<{neteaselawInteriorORexternal: app.dataSources.defaultDS.entities.NeteaselawInteriorORexternal}>, total: nasl.core.Integer}', await this.$logics['app.logics.getNeteaselawInteriorORexternal']({
        config: {
          download: false,
        },
        query: {},
        headers: {},
        path: {},
        body: {
          gid: (this.neteaselawCompany || {}).guid
        }
      }))
      if (Array.isArray((returnoutwardInvestment || {}).list)) {
        for (let index = 0; index < (((returnoutwardInvestment || {}).list || {}).length); index++) {
          const item = ((returnoutwardInvestment || {}).list)[index];
          /* 判断如果是第一次执行，就不用+号 了 */
          if ((this.outwardInvestment) == (undefined)) {
            this.outwardInvestment = this.$global.add('【', this.$global.add(((item || {}).neteaselawInteriorORexternal || {}).interiorORexternal, this.$global.add('】', this.$global.add(((item || {}).neteaselawInteriorORexternal || {}).companyName, this.$global.add(this.$global.add(((item || {}).neteaselawInteriorORexternal || {}).investmentAmount, '，'), this.$global.add(this.$global.add(((item || {}).neteaselawInteriorORexternal || {}).currency, '，'), this.$global.add(((item || {}).neteaselawInteriorORexternal || {}).shareholdingRatio, '%')))))))
          } else {
            /* 通过判断当前执行的数据，是否是空数据，如果是空数据，就不给加”/“号了 */
            if ((((item || {}).neteaselawInteriorORexternal || {}).interiorORexternal) == (undefined)) {
              /* 判断当前数据是否是自定义的公司名称，然后分支执行 */
              this.outwardInvestment = this.$global.add(this.outwardInvestment, this.$global.add('【', this.$global.add(((item || {}).neteaselawInteriorORexternal || {}).interiorORexternal, this.$global.add('】', this.$global.add(((item || {}).neteaselawInteriorORexternal || {}).companyName, this.$global.add(this.$global.add(((item || {}).neteaselawInteriorORexternal || {}).investmentAmount, '，'), this.$global.add(this.$global.add(((item || {}).neteaselawInteriorORexternal || {}).currency, '，'), this.$global.add(((item || {}).neteaselawInteriorORexternal || {}).shareholdingRatio, '%'))))))))
            } else {
              this.outwardInvestment = this.$global.add(this.outwardInvestment, this.$global.add(' /', this.$global.add('【', this.$global.add(((item || {}).neteaselawInteriorORexternal || {}).interiorORexternal, this.$global.add('】', this.$global.add(((item || {}).neteaselawInteriorORexternal || {}).companyName, this.$global.add(this.$global.add(((item || {}).neteaselawInteriorORexternal || {}).investmentAmount, '，'), this.$global.add(this.$global.add(((item || {}).neteaselawInteriorORexternal || {}).currency, '，'), this.$global.add(((item || {}).neteaselawInteriorORexternal || {}).shareholdingRatio, '%')))))))))
            }

          }

        }
      }

      await console.log(this.listinteriorORexternal)
      if (Array.isArray(this.listinteriorORexternal)) {
        for (let index = 0; index < ((this.listinteriorORexternal || {}).length); index++) {
          const item = (this.listinteriorORexternal)[index];
          /* 判断如果是第一次执行，就不用+号 了 */
          if ((this.outwardInvestment1) == (undefined)) {
            if ((((item || {}).text) == ('如不存在，请输入')) || (((item || {}).interiorORexternal) == ('对外投资'))) {
              this.outwardInvestment1 = this.$global.add('【', this.$global.add((item || {}).interiorORexternal, this.$global.add('】', this.$global.add((item || {}).companyName, this.$global.add(this.$global.add((item || {}).investmentAmount, '，'), this.$global.add(this.$global.add((item || {}).currency, '，'), this.$global.add((item || {}).shareholdingRatio, '%')))))))
            } else {
              /* 如果是内部选择的，那么就把值放入到custom */
              this.outwardInvestment1 = this.$global.add('【', this.$global.add((item || {}).interiorORexternal, this.$global.add('】', this.$global.add((item || {}).text, this.$global.add(this.$global.add((item || {}).investmentAmount, '，'), this.$global.add(this.$global.add((item || {}).currency, '，'), this.$global.add((item || {}).shareholdingRatio, '%')))))))
            }

          } else {
            /* 通过判断当前执行的数据，是否是空数据，如果是空数据，就不给加”/“号了 */
            if (((item || {}).interiorORexternal) == (undefined)) {
              /* 判断当前数据是否是自定义的公司名称，然后分支执行（已更新，合并字段为custom） */
              if ((((item || {}).text) == ('如不存在，请输入')) || (((item || {}).interiorORexternal) == ('对外投资'))) {
                this.outwardInvestment1 = this.$global.add(this.outwardInvestment1, this.$global.add('【', this.$global.add((item || {}).interiorORexternal, this.$global.add('】', this.$global.add((item || {}).companyName, this.$global.add(this.$global.add((item || {}).investmentAmount, '，'), this.$global.add(this.$global.add((item || {}).currency, '，'), this.$global.add((item || {}).shareholdingRatio, '%'))))))))
              } else {
                /* 如果是内部选择的，那么就把值放入到custom */
                this.outwardInvestment1 = this.$global.add(this.outwardInvestment1, this.$global.add('【', this.$global.add((item || {}).interiorORexternal, this.$global.add('】', this.$global.add((item || {}).text, this.$global.add(this.$global.add((item || {}).investmentAmount, '，'), this.$global.add(this.$global.add((item || {}).currency, '，'), this.$global.add((item || {}).shareholdingRatio, '%'))))))))
              }

            } else {
              if ((((item || {}).text) == ('如不存在，请输入')) || (((item || {}).interiorORexternal) == ('对外投资'))) {
                this.outwardInvestment1 = this.$global.add(this.outwardInvestment1, this.$global.add(' /', this.$global.add('【', this.$global.add((item || {}).interiorORexternal, this.$global.add('】', this.$global.add((item || {}).companyName, this.$global.add(this.$global.add((item || {}).investmentAmount, '，'), this.$global.add(this.$global.add((item || {}).currency, '，'), this.$global.add((item || {}).shareholdingRatio, '%')))))))))
              } else {
                /* 如果是内部选择的，那么就把值放入到custom */
                this.outwardInvestment1 = this.$global.add(this.outwardInvestment1, this.$global.add(' /', this.$global.add('【', this.$global.add((item || {}).interiorORexternal, this.$global.add('】', this.$global.add((item || {}).text, this.$global.add(this.$global.add((item || {}).investmentAmount, '，'), this.$global.add(this.$global.add((item || {}).currency, '，'), this.$global.add((item || {}).shareholdingRatio, '%')))))))))
              }

            }

          }

        }
      }

      return;
    }
    ,

    async popoAndEmailUpdate() {
      let popoto = undefined;
      let popocontent = undefined;
      let Company = this.$genInitFromSchema('{neteaselawCompany: app.dataSources.defaultDS.entities.NeteaselawCompany}', undefined);
      let reminderRecord = this.$genInitFromSchema('app.dataSources.defaultDS.entities.NeteaselawReminderRecord', undefined);
      let category = this.$genInitFromSchema('{neteaselawLicenceCategory: app.dataSources.defaultDS.entities.NeteaselawLicenceCategory}', undefined);
      let returnLicence = this.$genInitFromSchema('{list: nasl.collection.List<{neteaselawLicence: app.dataSources.defaultDS.entities.NeteaselawLicence}>, total: nasl.core.Integer}', undefined);
      let licence = this.$genInitFromSchema('{neteaselawLicence: app.dataSources.defaultDS.entities.NeteaselawLicence}', undefined);
      let returnReminderSetting = this.$genInitFromSchema('{list: nasl.collection.List<{neteaselawReminderSetting: app.dataSources.defaultDS.entities.NeteaselawReminderSetting}>, total: nasl.core.Integer}', undefined);
      let reminderSetting = this.$genInitFromSchema('{neteaselawReminderSetting: app.dataSources.defaultDS.entities.NeteaselawReminderSetting}', undefined);
      let remindText = undefined;

      remindText = undefined
      returnLicence = this.$genInitFromSchema('{list: nasl.collection.List<{neteaselawLicence: app.dataSources.defaultDS.entities.NeteaselawLicence}>, total: nasl.core.Integer}', await this.$logics['app.logics.getNeteaselawLicence1']({
        config: {
          download: false,
        },
        query: {},
        headers: {},
        path: {},
        body: {
          companyID: (this.neteaselawCompany || {}).guid
        }
      }))
      /* 这里加一个判断，查询这个公司下的证照信息，如果有提醒人，再进行执行 */
      if (((returnLicence || {}).total) > (0)) {
        licence = this.$genInitFromSchema('{neteaselawLicence: app.dataSources.defaultDS.entities.NeteaselawLicence}', this.$utils['Get']((returnLicence || {}).list, 0))
        popoto = this.$global.add(((licence || {}).neteaselawLicence || {}).originalCustodian, this.$global.add(',', ((licence || {}).neteaselawLicence || {}).firstUser))
        /* 开发环境域名：https://test-co-entity.netease.com/qz/CompanyList



生产环境域名：https://co-entity.netease.com/qz/CompanyList */
        popocontent = this.$global.add((this.neteaselawCompany || {}).companyName, this.$global.add('公司信息出现变更，变更的字段为：', this.$global.add(this.updateRecord, this.$global.add('，具体变更内容请前往易企查系统中操作，系统链接：', await this.$global.getCustomConfig('company')))))
        returnReminderSetting = this.$genInitFromSchema('{list: nasl.collection.List<{neteaselawReminderSetting: app.dataSources.defaultDS.entities.NeteaselawReminderSetting}>, total: nasl.core.Integer}', await this.$logics['app.logics.getReminderSetting']({
          config: {
            download: false,
          },
          query: {},
          headers: {},
          path: {},
          body: {
            reminderType: '公司信息变更提醒'
          }
        }))
        /* 查询是否可提醒 */
        if (((returnReminderSetting || {}).total) > (0)) {
          reminderSetting = this.$genInitFromSchema('{neteaselawReminderSetting: app.dataSources.defaultDS.entities.NeteaselawReminderSetting}', this.$utils['Get']((returnReminderSetting || {}).list, 0))
          if ((((reminderSetting || {}).neteaselawReminderSetting || {}).popo) != (undefined)) {
            await this.$logics['app.logics.popoApi']({
              config: {
                download: false,
              },
              query: {},
              headers: {},
              path: {},
              body: {
                popoto: popoto,
                popocontent: popocontent
              }
            })
            remindText = '网易popo'
          } else {
          }

          if ((((reminderSetting || {}).neteaselawReminderSetting || {}).email) != (undefined)) {
            await this.$logics['app.logics.emailApi']({
              config: {
                download: false,
              },
              query: {},
              headers: {},
              path: {},
              body: {
                emailto: popoto,
                emailcontent: popocontent
              }
            })
            if ((remindText) == (undefined)) {
              remindText = '网易邮箱'
            } else {
              remindText = this.$global.add(remindText, this.$global.add('，', '网易邮箱'))
            }

          } else {
          }

          /* 消息提醒记录 */
          reminderRecord.remindType = '公司信息变更提醒'
          reminderRecord.companyName = (this.neteaselawCompany || {}).companyName
          reminderRecord.cid = (this.neteaselawCompany || {}).guid
          reminderRecord.companyCode = (this.neteaselawCompany || {}).companyCode
          reminderRecord.reminderMode = remindText
          reminderRecord.remindDate = this.$utils['CurrDate']()
          reminderRecord.remindPeople = popoto
          reminderRecord.operator = 'System'
          this.$genInitFromSchema('app.dataSources.defaultDS.entities.NeteaselawReminderRecord', await this.$logics['app.dataSources.defaultDS.entities.NeteaselawReminderRecord.logics.create']({
            config: {
              download: false,
            },
            query: {},
            headers: {},

            body: reminderRecord
          }))
        } else {
        }

      } else {
      }

      return;
    }
    ,

    async currencyStartUsing() {
      let returnRegistCap = this.$genInitFromSchema('{list: nasl.collection.List<{neteaselawCurrency: app.dataSources.defaultDS.entities.NeteaselawCurrency}>, total: nasl.core.Integer}', undefined);
      let returnConCap = this.$genInitFromSchema('{list: nasl.collection.List<{neteaselawCurrency: app.dataSources.defaultDS.entities.NeteaselawCurrency}>, total: nasl.core.Integer}', undefined);
      let registCap = this.$genInitFromSchema('{neteaselawCurrency: app.dataSources.defaultDS.entities.NeteaselawCurrency}', undefined);
      let conCap = this.$genInitFromSchema('{neteaselawCurrency: app.dataSources.defaultDS.entities.NeteaselawCurrency}', undefined);

      /* 注册资本 */
      returnRegistCap = this.$genInitFromSchema('{list: nasl.collection.List<{neteaselawCurrency: app.dataSources.defaultDS.entities.NeteaselawCurrency}>, total: nasl.core.Integer}', await this.$logics['app.logics.getCurrency']({
        config: {
          download: false,
        },
        query: {},
        headers: {},
        path: {},
        body: {
          currencyCode: (this.neteaselawCompany || {}).registeredCapitalCurrency
        }
      }))
      if (((returnRegistCap || {}).total) > (0)) {
        registCap = this.$genInitFromSchema('{neteaselawCurrency: app.dataSources.defaultDS.entities.NeteaselawCurrency}', this.$utils['Get']((returnRegistCap || {}).list, 0))
        if ((((registCap || {}).neteaselawCurrency || {}).startUsing) == (undefined)) {
          registCap.neteaselawCurrency.startUsing = '*'
          this.$genInitFromSchema('app.dataSources.defaultDS.entities.NeteaselawCurrency', await this.$logics['app.dataSources.defaultDS.entities.NeteaselawCurrency.logics.update']({
            config: {
              download: false,
            },
            query: {},
            headers: {},

            body: (registCap || {}).neteaselawCurrency
          }))
        } else {
        }

      } else {
      }

      /* 实缴资本 */
      returnConCap = this.$genInitFromSchema('{list: nasl.collection.List<{neteaselawCurrency: app.dataSources.defaultDS.entities.NeteaselawCurrency}>, total: nasl.core.Integer}', await this.$logics['app.logics.getCurrency']({
        config: {
          download: false,
        },
        query: {},
        headers: {},
        path: {},
        body: {
          currencyCode: (this.neteaselawCompany || {}).contributedCapitalCurrency
        }
      }))
      if (((returnConCap || {}).total) > (0)) {
        conCap = this.$genInitFromSchema('{neteaselawCurrency: app.dataSources.defaultDS.entities.NeteaselawCurrency}', this.$utils['Get']((returnConCap || {}).list, 0))
        if ((((conCap || {}).neteaselawCurrency || {}).startUsing) == (undefined)) {
          conCap.neteaselawCurrency.startUsing = '*'
          this.$genInitFromSchema('app.dataSources.defaultDS.entities.NeteaselawCurrency', await this.$logics['app.dataSources.defaultDS.entities.NeteaselawCurrency.logics.update']({
            config: {
              download: false,
            },
            query: {},
            headers: {},

            body: (conCap || {}).neteaselawCurrency
          }))
        } else {
        }

      } else {
      }

      return;
    }
    ,

    async load1(params) {
      params = this.$genInitFromSchema('nasl.ui.DataSourceParams', params || (this.$route.query.hasOwnProperty('params') ? this.$genInitFromSchema('nasl.ui.DataSourceParams', this.$route.query.params) : ""));
      let result = this.$genInitFromSchema('{list: nasl.collection.List<{neteaselawContributedCapital: app.dataSources.defaultDS.entities.NeteaselawContributedCapital}>, total: nasl.core.Integer}', undefined);

      result = this.$genInitFromSchema('{list: nasl.collection.List<{neteaselawContributedCapital: app.dataSources.defaultDS.entities.NeteaselawContributedCapital}>, total: nasl.core.Integer}', await this.$logics['app.logics.loadCompanyTableView1']({
        config: {
          download: false,
        },
        query: {},
        headers: {},
        path: {},
        body: {
          page: (params || {}).page,
          size: (params || {}).size,
          sort: (params || {}).sort,
          order: (params || {}).order
        }
      }))
      return result;
    }
    ,

    async loadSelect8(params) {
      params = this.$genInitFromSchema('nasl.ui.DataSourceParams', params || (this.$route.query.hasOwnProperty('params') ? this.$genInitFromSchema('nasl.ui.DataSourceParams', this.$route.query.params) : ""));
      let result = this.$genInitFromSchema('{list: nasl.collection.List<{neteaselawCurrency: app.dataSources.defaultDS.entities.NeteaselawCurrency}>, total: nasl.core.Integer}', undefined);

      result = this.$genInitFromSchema('{list: nasl.collection.List<{neteaselawCurrency: app.dataSources.defaultDS.entities.NeteaselawCurrency}>, total: nasl.core.Integer}', await this.$logics['app.logics.loadCompanySelect8']({
        config: {
          download: false,
        },
        query: {},
        headers: {},
        path: {},
        body: {
          page: (params || {}).page,
          size: (params || {}).size,
          firterText: (params || {}).filterText
        }
      }))
      return result;
    }
    ,

    async SumContributedCapital() {
      let investor = undefined;
      let ContributedCapital = this.$genInitFromSchema('app.structures.SumContributedCapital', undefined);
      let variable2 = undefined;
      let variable3 = this.$genInitFromSchema('nasl.collection.List<app.structures.SumContributedCapital>', undefined);
      let variable4 = this.$genInitFromSchema('app.structures.SumContributedCapital', undefined);

      this.listSumContributedCapital = variable3
      ContributedCapital = variable4
      /* 实缴资本计算 */
      if (Array.isArray(this.listContributedCapital)) {
        for (let index = 0; index < ((this.listContributedCapital || {}).length); index++) {
          const item = (this.listContributedCapital)[index];
          ContributedCapital = variable4
          /* vab1先获取到币种名称，然后到实缴资本计算集合里进行判断，如果确认没有，再行添加 */
          variable2 = false
          if (Array.isArray(this.listSumContributedCapital)) {
            for (let index1 = 0; index1 < ((this.listSumContributedCapital || {}).length); index1++) {
              const item1 = (this.listSumContributedCapital)[index1];
              if (((item1 || {}).capitalCurrency) == ((item || {}).investorName)) {
                variable2 = true
              } else {
              }

            }
          }

          if ((variable2) == (false)) {
            ContributedCapital.capitalCurrency = (item || {}).investorName
            ContributedCapital.contributive = (item || {}).investorName
            this.$utils['Add'](this.listSumContributedCapital, this.$genInitFromSchema('app.structures.SumContributedCapital', this.$utils['Clone'](ContributedCapital)))
          } else {
          }

        }
      }

      /* 页面中，获取到每个实缴币种的值，放入到实缴资本列表中进行查询计算 */
      if (Array.isArray(this.listSumContributedCapital)) {
        for (let index = 0; index < ((this.listSumContributedCapital || {}).length); index++) {
          const item = (this.listSumContributedCapital)[index];
          item.cNY = 0
          item.contributiveSum = 0
          if (Array.isArray(this.listContributedCapital)) {
            for (let index1 = 0; index1 < ((this.listContributedCapital || {}).length); index1++) {
              const item1 = (this.listContributedCapital)[index1];
              if (((item || {}).capitalCurrency) == ((item1 || {}).investorName)) {
                if (((item || {}).cNY) == (0)) {
                  item.cNY = (item1 || {}).cNY
                } else {
                  item.cNY = this.$global.add((item || {}).cNY, (item1 || {}).cNY)
                }

                if (((item || {}).contributiveSum) == (0)) {
                  item.contributiveSum = (item1 || {}).originalCurrency
                } else {
                  item.contributiveSum = this.$global.add((item || {}).contributiveSum, (item1 || {}).originalCurrency)
                }

              } else {
              }

            }
          }

        }
      }

      return;
    }
    ,

    async createContributedCapital(cid) {
      cid = cid || (this.$route.query.hasOwnProperty('cid') ? this.$genInitFromSchema('nasl.core.Long', this.$route.query.cid) : "");

      /* 实缴资本新增 */
      if (Array.isArray(this.listContributedCapital)) {
        for (let index = 0; index < ((this.listContributedCapital || {}).length); index++) {
          const item = (this.listContributedCapital)[index];
          item.cid = cid
          this.$genInitFromSchema('app.dataSources.defaultDS.entities.NeteaselawContributedCapital', await this.$logics['app.dataSources.defaultDS.entities.NeteaselawContributedCapital.logics.create']({
            config: {
              download: false,
            },
            query: {},
            headers: {},

            body: item
          }))
        }
      }

      return;
    }
    ,

    async updateContributedCapital() {
      let returnCon = this.$genInitFromSchema('app.dataSources.defaultDS.entities.NeteaselawContributedCapital', undefined);

      /* 修改实缴资本，先删除，再新增 */
      if (((this.returnContributedCapital || {}).total) > (0)) {
        if (Array.isArray((this.returnContributedCapital || {}).list)) {
          for (let index = 0; index < (((this.returnContributedCapital || {}).list || {}).length); index++) {
            const item = ((this.returnContributedCapital || {}).list)[index];
            if ((((item || {}).neteaselawContributedCapital || {}).id) != (undefined)) {
              returnCon = this.$genInitFromSchema('app.dataSources.defaultDS.entities.NeteaselawContributedCapital', await this.$logics['app.dataSources.defaultDS.entities.NeteaselawContributedCapital.logics.get']({
                config: {
                  download: false,
                },
                query: {},
                headers: {},
                query: {
                  id: ((item || {}).neteaselawContributedCapital || {}).id
                },
                body: {}
              }))
            } else {
            }

            if (((returnCon || {}).id) != (undefined)) {
              await this.$logics['app.dataSources.defaultDS.entities.NeteaselawContributedCapital.logics.delete']({
                config: {
                  download: false,
                },
                query: {},
                headers: {},
                query: {
                  id: ((item || {}).neteaselawContributedCapital || {}).id
                },
                body: {}
              })
            } else {
            }

          }
        }

      } else {
      }

      await console.log(this.listContributedCapital)
      if (Array.isArray(this.listContributedCapital)) {
        for (let index = 0; index < ((this.listContributedCapital || {}).length); index++) {
          const item = (this.listContributedCapital)[index];
          item.cid = this.guid
          this.$genInitFromSchema('app.dataSources.defaultDS.entities.NeteaselawContributedCapital', await this.$logics['app.dataSources.defaultDS.entities.NeteaselawContributedCapital.logics.create']({
            config: {
              download: false,
            },
            query: {},
            headers: {},

            body: item
          }))
        }
      }

      return;
    }
    ,

    async enterContributedCapital() {
      let contributedCapital = this.$genInitFromSchema('app.dataSources.defaultDS.entities.NeteaselawContributedCapital', undefined);

      /* 进入事件，触发实缴资本赋值 */
      if ((this.guid) != (undefined)) {
        this.returnContributedCapital = this.$genInitFromSchema('{list: nasl.collection.List<{neteaselawContributedCapital: app.dataSources.defaultDS.entities.NeteaselawContributedCapital}>, total: nasl.core.Integer}', await this.$logics['app.logics.getContributedCapital']({
          config: {
            download: false,
          },
          query: {},
          headers: {},
          path: {},
          body: {
            cid: this.guid
          }
        }))
        if (Array.isArray((this.returnContributedCapital || {}).list)) {
          for (let index = 0; index < (((this.returnContributedCapital || {}).list || {}).length); index++) {
            const item = ((this.returnContributedCapital || {}).list)[index];
            contributedCapital.id = ((item || {}).neteaselawContributedCapital || {}).id
            contributedCapital.createdTime = ((item || {}).neteaselawContributedCapital || {}).createdTime
            contributedCapital.updatedTime = ((item || {}).neteaselawContributedCapital || {}).updatedTime
            contributedCapital.investor = ((item || {}).neteaselawContributedCapital || {}).investor
            contributedCapital.investorData = ((item || {}).neteaselawContributedCapital || {}).investorData
            contributedCapital.investorName = ((item || {}).neteaselawContributedCapital || {}).investorName
            contributedCapital.originalCurrency = ((item || {}).neteaselawContributedCapital || {}).originalCurrency
            contributedCapital.cNY = ((item || {}).neteaselawContributedCapital || {}).cNY
            contributedCapital.registeredCurrency = ((item || {}).neteaselawContributedCapital || {}).registeredCurrency
            contributedCapital.cid = ((item || {}).neteaselawContributedCapital || {}).cid
            this.$utils['Add'](this.listContributedCapital, this.$genInitFromSchema('app.dataSources.defaultDS.entities.NeteaselawContributedCapital', this.$utils['Clone'](contributedCapital)))
          }
        }

        await this.SumContributedCapital()
      } else {
      }

      return;
    }
    ,

    async enterSelectupdate() {
      let NeteaselawShareholder = this.$genInitFromSchema('app.dataSources.defaultDS.entities.NeteaselawShareholder', undefined);
      let variable1 = this.$genInitFromSchema('nasl.collection.List<nasl.core.String>', undefined);
      let listNeteaselawShareholder1 = this.$genInitFromSchema('app.structures.Shareholder', undefined);
      let param = this.$genInitFromSchema('nasl.ui.DataSourceParams', undefined);
      let param1 = this.$genInitFromSchema('nasl.ui.DataSourceParams', undefined);
      let variable2 = "是";
      let variable3 = "是";

      /* 进入时调用 */
      if ((this.guid) != (undefined)) {
        /* 如果是修改进入，默认给股东必填、持股比例必须100%、对外投资情况都必填 */
        this.judgeNeteaselawShareholder = true
        this.sumshareholdingRatio = true
        this.sumshareholdingRatio = true
        this.neteaselawCompany = this.$genInitFromSchema('app.dataSources.defaultDS.entities.NeteaselawCompany', await this.$logics['app.dataSources.defaultDS.entities.NeteaselawCompany.logics.get']({
          config: {
            download: false,
          },
          query: {},
          headers: {},
          query: {
            guid: this.guid
          },
          body: {}
        }))
        /* 分公司负责人不等于空，就把按钮显示 */
        if (((this.neteaselawCompany || {}).filialePerson) != (undefined)) {
          this.filialePerson = true
        } else {
        }

        if (((this.neteaselawCompany || {}).dateOfIncorporation) != (undefined)) {
          this.companyDateOfEstablishment = this.$utils['Convert']((this.neteaselawCompany || {}).dateOfIncorporation, {
            "concept": "TypeAnnotation",
            "changedTime": 1677739759926,
            "name": "",
            "typeKind": "primitive",
            "typeNamespace": "nasl.core",
            "typeName": "Date",
            "typeArguments": null,
            "returnType": null,
            "properties": null
          })
        } else {
        }

        await console.log((this.neteaselawCompany || {}).businessAccounting)
        await console.log((this.neteaselawCompany || {}).businessAccounting)
        this.return1NeteaselawShareholder = this.$genInitFromSchema('{list: nasl.collection.List<{neteaselawShareholder: app.dataSources.defaultDS.entities.NeteaselawShareholder}>, total: nasl.core.Integer}', await this.$logics['app.logics.getNeteaselawShareholder']({
          config: {
            download: false,
          },
          query: {},
          headers: {},
          path: {},
          body: {
            cid: this.guid
          }
        }))
        this.return1NeteaselawShareholder1 = this.$genInitFromSchema('{list: nasl.collection.List<{neteaselawShareholder: app.dataSources.defaultDS.entities.NeteaselawShareholder}>, total: nasl.core.Integer}', await this.$logics['app.logics.getNeteaselawShareholder']({
          config: {
            download: false,
          },
          query: {},
          headers: {},
          path: {},
          body: {
            cid: this.guid
          }
        }))
        if (Array.isArray((this.return1NeteaselawShareholder || {}).list)) {
          for (let index = 0; index < (((this.return1NeteaselawShareholder || {}).list || {}).length); index++) {
            const item = ((this.return1NeteaselawShareholder || {}).list)[index];
            /* 判断，如果自定义等于“其他”，那么就进行换位置，变量互换，方便储存 */
            if ((((item || {}).neteaselawShareholder || {}).userDefined) == ('其他')) {
              item.neteaselawShareholder.userDefined = ((item || {}).neteaselawShareholder || {}).shareholderName
              item.neteaselawShareholder.shareholderNameEmail = '其他'
              item.neteaselawShareholder.shareholderName = undefined
            } else {
            }

            NeteaselawShareholder = this.$genInitFromSchema('app.dataSources.defaultDS.entities.NeteaselawShareholder', this.$utils['Clone']((item || {}).neteaselawShareholder))
            listNeteaselawShareholder1.id = (NeteaselawShareholder || {}).id
            listNeteaselawShareholder1.createdTime = (NeteaselawShareholder || {}).createdTime
            listNeteaselawShareholder1.updatedTime = ((item || {}).neteaselawShareholder || {}).updatedTime
            listNeteaselawShareholder1.createdBy = ((item || {}).neteaselawShareholder || {}).createdBy
            listNeteaselawShareholder1.cid = ((item || {}).neteaselawShareholder || {}).cid
            listNeteaselawShareholder1.updatedBy = ((item || {}).neteaselawShareholder || {}).updatedBy
            listNeteaselawShareholder1.shareholderName = ((item || {}).neteaselawShareholder || {}).shareholderName
            listNeteaselawShareholder1.shareholdingRatio = ((item || {}).neteaselawShareholder || {}).shareholdingRatio
            listNeteaselawShareholder1.userDefined = ((item || {}).neteaselawShareholder || {}).userDefined
            listNeteaselawShareholder1.shareholder = ((item || {}).neteaselawShareholder || {}).shareholder
            listNeteaselawShareholder1.shareholderNameEmail.shareholderNameEmail = ((item || {}).neteaselawShareholder || {}).shareholderNameEmail
            this.$utils['Add'](this.listNeteaselawShareholder, this.$genInitFromSchema('app.structures.Shareholder', this.$utils['Clone'](listNeteaselawShareholder1)))
          }
        }

        /* 获取到数据，然后做api信息查询和填充 */
        await this.disposeApi()
        /* 对外投资 */
        await this.getNeteaselawInteriorORexternal()
      } else {
      }

      variable1 = this.$genInitFromSchema('nasl.collection.List<nasl.core.String>', this.$utils['Split']((this.neteaselawCompany || {}).outwardInvestment, '/'))
      /* 如果注册资本为空，默认给币种赋值
如果当前信息币种等于人民币 那么直接赋值第一个属性就可以了
如果当前币种不是人民币  那么就把第三个属性 赋值给第一个  第一个属性 赋值给第三个 */
      if (((this.neteaselawCompany || {}).registeredCapital) == (undefined)) {
        this.neteaselawCompany.registeredCapitalCurrency = 'CNY'
      } else {
        if (((this.neteaselawCompany || {}).registeredCapitalCurrency) == ('CNY')) {
          this.registered = (this.neteaselawCompany || {}).registeredCapital
        } else {
          this.registered = (this.neteaselawCompany || {}).registeredCapitalCNY
          this.registeredCNY = (this.neteaselawCompany || {}).registeredCapital
        }

      }

      if (((this.neteaselawCompany || {}).contributedCapital) == (undefined)) {
        this.neteaselawCompany.contributedCapitalCurrency = 'CNY'
      } else {
        if (((this.neteaselawCompany || {}).contributedCapitalCurrency) == ('CNY')) {
          this.contributed = (this.neteaselawCompany || {}).contributedCapital
        } else {
          this.contributed = (this.neteaselawCompany || {}).contributedCapitalCurrencyCNY
          this.contributedCNY = (this.neteaselawCompany || {}).contributedCapital
        }

      }

      /* 实缴资本修改 */
      await this.enterContributedCapital()
      await this.$refs.select21.reload()
      await this.$refs.select15.reload()
      /* 法务人查询刷新 */
      this.$genInitFromSchema('nasl.collection.List<apis.licenseJurisdiction.structures.EhrUserRespVO>', await this.searchUser1(undefined))
      this.$genInitFromSchema('nasl.collection.List<apis.licenseJurisdiction.structures.EhrUserRespVO>', await this.searchUser(undefined))
      /* 填充多选的内容,填充给多选一个list<0>，可以在预览的时候让内容显示出来，默认值给“是”，是为了给下标为0的变量赋个默认值，可以让用户在选择的时候，给赋值 */
      if (((this.neteaselawCompany || {}).businessAccounting) != (undefined)) {
        this.$utils['Add'](this.multipleResponse2, (this.neteaselawCompany || {}).businessAccounting)
      } else {
      }

      if (((this.neteaselawCompany || {}).financialStatement) != (undefined)) {
        this.$utils['Add'](this.multipleResponse3, (this.neteaselawCompany || {}).financialStatement)
      } else {
      }

      if (((this.neteaselawCompany || {}).highTechEnterprise) != (undefined)) {
        this.$utils['Add'](this.multipleResponse7, (this.neteaselawCompany || {}).highTechEnterprise)
      } else {
      }

      /* 获取一下值，给修改时进行判断用 */
      this.variable9 = this.$genInitFromSchema('{list: nasl.collection.List<{neteaselawShareholder: app.dataSources.defaultDS.entities.NeteaselawShareholder}>, total: nasl.core.Integer}', await this.$logics['app.logics.getNeteaselawShareholder']({
        config: {
          download: false,
        },
        query: {},
        headers: {},
        path: {},
        body: {
          cid: this.guid
        }
      }))
      return;
    }
    ,

    async getBuList() {
      let returnGetBulist = this.$genInitFromSchema('apis.licenseJurisdiction.structures.ApiReturnOfGetBuList', undefined);
      let result = this.$genInitFromSchema('nasl.collection.List<apis.licenseJurisdiction.structures.BuVO>', undefined);

      /* 调用getBuList接口，获取BU */
      returnGetBulist = this.$genInitFromSchema('apis.licenseJurisdiction.structures.ApiReturnOfGetBuList', await this.$logics['app.logics.faw_GetBu']({
        config: {
          download: false,
        },
        query: {},
        headers: {},
        path: {},
        body: {
          userid: undefined
        }
      }))
      result = this.$genInitFromSchema('nasl.collection.List<apis.licenseJurisdiction.structures.BuVO>', this.$utils['Clone']((returnGetBulist || {}).data))
      return result;
    }
    ,

    async searchUser(param) {
      param = this.$genInitFromSchema('nasl.ui.DataSourceParams', param || (this.$route.query.hasOwnProperty('param') ? this.$genInitFromSchema('nasl.ui.DataSourceParams', this.$route.query.param) : ""));
      let returnSearchUser = this.$genInitFromSchema('apis.licenseJurisdiction.structures.ApiReturnOfSearchUser', undefined);
      let result = this.$genInitFromSchema('nasl.collection.List<apis.licenseJurisdiction.structures.EhrUserRespVO>', undefined);

      /* 搜索用户 */
      if (((this.neteaselawCompany || {}).legalPerson) == (undefined)) {
        returnSearchUser = this.$genInitFromSchema('apis.licenseJurisdiction.structures.ApiReturnOfSearchUser', await this.$logics['app.logics.faw_SearchUser']({
          config: {
            download: false,
          },
          query: {},
          headers: {},
          path: {},
          body: {
            userid: (param || {}).filterText,
            search: (param || {}).filterText
          }
        }))
        this.user11 = this.$genInitFromSchema('nasl.collection.List<apis.licenseJurisdiction.structures.EhrUserRespVO>', this.$utils['Clone']((returnSearchUser || {}).data))
      } else {
        returnSearchUser = this.$genInitFromSchema('apis.licenseJurisdiction.structures.ApiReturnOfSearchUser', await this.$logics['app.logics.faw_SearchUser']({
          config: {
            download: false,
          },
          query: {},
          headers: {},
          path: {},
          body: {
            userid: (this.neteaselawCompany || {}).legalPerson,
            search: (this.neteaselawCompany || {}).legalPerson
          }
        }))
        this.user11 = this.$genInitFromSchema('nasl.collection.List<apis.licenseJurisdiction.structures.EhrUserRespVO>', this.$utils['Clone']((returnSearchUser || {}).data))
      }

      result = this.$genInitFromSchema('nasl.collection.List<apis.licenseJurisdiction.structures.EhrUserRespVO>', this.$utils['Clone']((returnSearchUser || {}).data))
      return result;
    }
    ,

    async searchUser1(param) {
      param = this.$genInitFromSchema('nasl.ui.DataSourceParams', param || (this.$route.query.hasOwnProperty('param') ? this.$genInitFromSchema('nasl.ui.DataSourceParams', this.$route.query.param) : ""));
      let returnSearchUser = this.$genInitFromSchema('apis.licenseJurisdiction.structures.ApiReturnOfSearchUser', undefined);
      let result = this.$genInitFromSchema('nasl.collection.List<apis.licenseJurisdiction.structures.EhrUserRespVO>', undefined);

      /* 搜索用户 */
      if (((this.neteaselawCompany || {}).legalRepresentative) == (undefined)) {
        returnSearchUser = this.$genInitFromSchema('apis.licenseJurisdiction.structures.ApiReturnOfSearchUser', await this.$logics['app.logics.faw_SearchUser']({
          config: {
            download: false,
          },
          query: {},
          headers: {},
          path: {},
          body: {
            userid: (param || {}).filterText,
            search: (param || {}).filterText
          }
        }))
        this.user12 = this.$genInitFromSchema('nasl.collection.List<apis.licenseJurisdiction.structures.EhrUserRespVO>', this.$utils['Clone']((returnSearchUser || {}).data))
      } else {
        returnSearchUser = this.$genInitFromSchema('apis.licenseJurisdiction.structures.ApiReturnOfSearchUser', await this.$logics['app.logics.faw_SearchUser']({
          config: {
            download: false,
          },
          query: {},
          headers: {},
          path: {},
          body: {
            userid: (this.neteaselawCompany || {}).legalRepresentative,
            search: (this.neteaselawCompany || {}).legalRepresentative
          }
        }))
        this.user12 = this.$genInitFromSchema('nasl.collection.List<apis.licenseJurisdiction.structures.EhrUserRespVO>', this.$utils['Clone']((returnSearchUser || {}).data))
      }

      result = this.$genInitFromSchema('nasl.collection.List<apis.licenseJurisdiction.structures.EhrUserRespVO>', this.$utils['Clone']((returnSearchUser || {}).data))
      return result;
    }
    ,

    async searchUser2(param) {
      param = this.$genInitFromSchema('nasl.ui.DataSourceParams', param || (this.$route.query.hasOwnProperty('param') ? this.$genInitFromSchema('nasl.ui.DataSourceParams', this.$route.query.param) : ""));
      let returnSearchUser = this.$genInitFromSchema('apis.licenseJurisdiction.structures.ApiReturnOfSearchUser', undefined);
      let result = this.$genInitFromSchema('nasl.collection.List<apis.licenseJurisdiction.structures.EhrUserRespVO>', undefined);

      /* 搜索用户 */
      returnSearchUser = this.$genInitFromSchema('apis.licenseJurisdiction.structures.ApiReturnOfSearchUser', await this.$logics['app.logics.faw_SearchUser']({
        config: {
          download: false,
        },
        query: {},
        headers: {},
        path: {},
        body: {
          userid: (param || {}).filterText,
          search: (param || {}).filterText
        }
      }))
      result = this.$genInitFromSchema('nasl.collection.List<apis.licenseJurisdiction.structures.EhrUserRespVO>', this.$utils['Clone']((returnSearchUser || {}).data))
      return result;
    }
    ,

    async disposeApi() {
      let variable1 = this.$genInitFromSchema('app.structures.Shareholder', undefined);
      let selectStructure = this.$genInitFromSchema('app.structures.SelectStructure', undefined);
      let returnUser = this.$genInitFromSchema('nasl.collection.List<apis.licenseJurisdiction.structures.EhrUserRespVO>', undefined);
      let variable4 = this.$genInitFromSchema('app.structures.SelectStructure', undefined);
      let listShareholder = this.$genInitFromSchema('nasl.collection.List<app.structures.Shareholder>', undefined);

      /* 处理选择框返回数据，显示的文本字段和选择框的值是对应的 */
      if (Array.isArray(this.listNeteaselawShareholder)) {
        for (let index = 0; index < ((this.listNeteaselawShareholder || {}).length); index++) {
          const item = (this.listNeteaselawShareholder)[index];
          variable1 = item
          returnUser = this.$genInitFromSchema('nasl.collection.List<apis.licenseJurisdiction.structures.EhrUserRespVO>', await this.searchUser2({filterText: item.shareholderNameEmail.shareholderNameEmail}))
          variable1.shareholderNameEmail.initSelectList = []
          if (Array.isArray(returnUser)) {
            for (let index1 = 0; index1 < ((returnUser || {}).length); index1++) {
              const item1 = (returnUser)[index1];
              variable4.text = (item1 || {}).userName
              variable4.currentText = (item1 || {}).userName
              variable4.value = (item1 || {}).account
              this.$utils['Add'](((variable1 || {}).shareholderNameEmail || {}).initSelectList, this.$genInitFromSchema('app.structures.SelectStructure', this.$utils['Clone'](variable4)))
            }
          }

          this.$utils['Add'](listShareholder, this.$genInitFromSchema('app.structures.Shareholder', this.$utils['Clone'](variable1)))
        }
      }

      this.listNeteaselawShareholder = this.$genInitFromSchema('nasl.collection.List<app.structures.Shareholder>', this.$utils['Clone'](listShareholder))
      await this.$refs.tableView.reload()
      return;
    }
    ,

    async loginapi() {
      let returnUser = this.$genInitFromSchema('nasl.collection.List<apis.licenseJurisdiction.structures.EhrUserRespVO>', undefined);
      let variable1 = this.$genInitFromSchema('app.structures.Shareholder', undefined);
      let variable4 = this.$genInitFromSchema('app.structures.SelectStructure', undefined);

      returnUser = this.$genInitFromSchema('nasl.collection.List<apis.licenseJurisdiction.structures.EhrUserRespVO>', await this.searchUser({filterText: item.neteaselawCompany.legalPerson}))
      variable1.shareholderNameEmail.initSelectList = []
      if (Array.isArray(returnUser)) {
        for (let index = 0; index < ((returnUser || {}).length); index++) {
          const item = (returnUser)[index];
          variable4.text = (item || {}).userName
          variable4.currentText = (item || {}).userName
          variable4.value = (item || {}).account
          this.$utils['Add'](((variable1 || {}).shareholderNameEmail || {}).initSelectList, this.$genInitFromSchema('app.structures.SelectStructure', this.$utils['Clone'](variable4)))
        }
      }

      return;
    }
    ,

    async loadSelect7(params) {
      params = this.$genInitFromSchema('nasl.ui.DataSourceParams', params || (this.$route.query.hasOwnProperty('params') ? this.$genInitFromSchema('nasl.ui.DataSourceParams', this.$route.query.params) : ""));
      let result = this.$genInitFromSchema('{list: nasl.collection.List<{neteaselawCompany: app.dataSources.defaultDS.entities.NeteaselawCompany}>, total: nasl.core.Integer}', undefined);

      result = this.$genInitFromSchema('{list: nasl.collection.List<{neteaselawCompany: app.dataSources.defaultDS.entities.NeteaselawCompany}>, total: nasl.core.Integer}', await this.$logics['app.logics.loadCompanySelect7']({
        config: {
          download: false,
        },
        query: {},
        headers: {},
        path: {},
        body: {
          page: (params || {}).page,
          size: (params || {}).size
        }
      }))
      return result;
    }
    ,

    async loadSelect18(params) {
      params = this.$genInitFromSchema('nasl.ui.DataSourceParams', params || (this.$route.query.hasOwnProperty('params') ? this.$genInitFromSchema('nasl.ui.DataSourceParams', this.$route.query.params) : ""));
      let result = this.$genInitFromSchema('{list: nasl.collection.List<{neteaselawCompany: app.dataSources.defaultDS.entities.NeteaselawCompany}>, total: nasl.core.Integer}', undefined);

      result = this.$genInitFromSchema('{list: nasl.collection.List<{neteaselawCompany: app.dataSources.defaultDS.entities.NeteaselawCompany}>, total: nasl.core.Integer}', await this.$logics['app.logics.loadCompanySelect18']({
        config: {
          download: false,
        },
        query: {},
        headers: {},
        path: {},
        body: {
          page: (params || {}).page,
          size: (params || {}).size
        }
      }))
      return result;
    }
    ,

    async loadSelect9(params) {
      params = this.$genInitFromSchema('nasl.ui.DataSourceParams', params || (this.$route.query.hasOwnProperty('params') ? this.$genInitFromSchema('nasl.ui.DataSourceParams', this.$route.query.params) : ""));
      let result = this.$genInitFromSchema('{list: nasl.collection.List<{neteaselawCompany: app.dataSources.defaultDS.entities.NeteaselawCompany}>, total: nasl.core.Integer}', undefined);

      result = this.$genInitFromSchema('{list: nasl.collection.List<{neteaselawCompany: app.dataSources.defaultDS.entities.NeteaselawCompany}>, total: nasl.core.Integer}', await this.$logics['app.logics.loadCompanySelect9']({
        config: {
          download: false,
        },
        query: {},
        headers: {},
        path: {},
        body: {
          page: (params || {}).page,
          size: (params || {}).size
        }
      }))
      return result;
    }
    ,

    async changeText() {
      let user = this.$genInitFromSchema('apis.licenseJurisdiction.structures.ApiReturnOfSearchUser', undefined);
      let username = this.$genInitFromSchema('apis.licenseJurisdiction.structures.EhrUserRespVO', undefined);
      let user1 = this.$genInitFromSchema('apis.licenseJurisdiction.structures.ApiReturnOfSearchUser', undefined);
      let username1 = this.$genInitFromSchema('apis.licenseJurisdiction.structures.EhrUserRespVO', undefined);

      /* 通过邮箱查询到名称进行存储 */
      user = this.$genInitFromSchema('apis.licenseJurisdiction.structures.ApiReturnOfSearchUser', await this.$logics['app.logics.faw_SearchUser']({
        config: {
          download: false,
        },
        query: {},
        headers: {},
        path: {},
        body: {
          userid: (this.neteaselawCompany || {}).legalPerson,
          search: (this.neteaselawCompany || {}).legalPerson
        }
      }))
      if ((((user || {}).data || {}).length) > (0)) {
        username = this.$genInitFromSchema('apis.licenseJurisdiction.structures.EhrUserRespVO', this.$utils['Get']((user || {}).data, 0))
        this.neteaselawCompany.legalPersonName = (username || {}).userName
      } else {
      }

      user1 = this.$genInitFromSchema('apis.licenseJurisdiction.structures.ApiReturnOfSearchUser', await this.$logics['app.logics.faw_SearchUser']({
        config: {
          download: false,
        },
        query: {},
        headers: {},
        path: {},
        body: {
          userid: (this.neteaselawCompany || {}).legalRepresentative,
          search: (this.neteaselawCompany || {}).legalRepresentative
        }
      }))
      if ((((user1 || {}).data || {}).length) > (0)) {
        username1 = this.$genInitFromSchema('apis.licenseJurisdiction.structures.EhrUserRespVO', this.$utils['Get']((user1 || {}).data, 0))
        this.neteaselawCompany.legalRepresentativeName = (username1 || {}).userName
      } else {
      }

      return;
    }
    ,

    async selectUser(param1) {
      param1 = this.$genInitFromSchema('nasl.ui.DataSourceParams', param1 || (this.$route.query.hasOwnProperty('param1') ? this.$genInitFromSchema('nasl.ui.DataSourceParams', this.$route.query.param1) : ""));
      let variable1 = this.$genInitFromSchema('nasl.ui.DataSourceParams', undefined);

      await console.log('dawada')
      /* 设置搜索前事件，通过输入参数，查询到数据，然后重新拼接展示 */
      this.$genInitFromSchema('nasl.ui.DataSourceParams', this.$utils['Clear'](variable1))
      this.$genInitFromSchema('nasl.collection.List<apis.licenseJurisdiction.structures.EhrUserRespVO>', this.$utils['Clear'](this.user11))
      variable1.filterText = (param1 || {}).filterText
      this.user11 = this.$genInitFromSchema('nasl.collection.List<apis.licenseJurisdiction.structures.EhrUserRespVO>', await this.searchUser(variable1))
      if (Array.isArray(this.user11)) {
        for (let index = 0; index < ((this.user11 || {}).length); index++) {
          const item = (this.user11)[index];
          item.userName = this.$global.add((item || {}).userName, this.$global.add('（', this.$global.add((item || {}).email, '）')))
        }
      }

      return;
    }
    ,

    async selectUser1(param1) {
      param1 = this.$genInitFromSchema('nasl.ui.DataSourceParams', param1 || (this.$route.query.hasOwnProperty('param1') ? this.$genInitFromSchema('nasl.ui.DataSourceParams', this.$route.query.param1) : ""));
      let variable1 = this.$genInitFromSchema('nasl.ui.DataSourceParams', undefined);

      this.$genInitFromSchema('nasl.ui.DataSourceParams', this.$utils['Clear'](variable1))
      this.$genInitFromSchema('nasl.collection.List<apis.licenseJurisdiction.structures.EhrUserRespVO>', this.$utils['Clear'](this.user12))
      variable1.filterText = (param1 || {}).filterText
      this.user12 = this.$genInitFromSchema('nasl.collection.List<apis.licenseJurisdiction.structures.EhrUserRespVO>', await this.searchUser1(variable1))
      if (Array.isArray(this.user12)) {
        for (let index = 0; index < ((this.user12 || {}).length); index++) {
          const item = (this.user12)[index];
          item.userName = this.$global.add((item || {}).userName, this.$global.add('（', this.$global.add((item || {}).email, '）')))
        }
      }

      return;
    }
    ,

    async selectUser2(param1) {
      param1 = this.$genInitFromSchema('nasl.ui.DataSourceParams', param1 || (this.$route.query.hasOwnProperty('param1') ? this.$genInitFromSchema('nasl.ui.DataSourceParams', this.$route.query.param1) : ""));
      let variable1 = this.$genInitFromSchema('nasl.ui.DataSourceParams', undefined);

      this.$genInitFromSchema('nasl.ui.DataSourceParams', this.$utils['Clear'](variable1))
      variable1.filterText = (param1 || {}).filterText
      this.user13 = this.$genInitFromSchema('nasl.collection.List<apis.licenseJurisdiction.structures.EhrUserRespVO>', await this.searchUser2(variable1))
      if (Array.isArray(this.user13)) {
        for (let index = 0; index < ((this.user13 || {}).length); index++) {
          const item = (this.user13)[index];
          item.userName = this.$global.add((item || {}).userName, this.$global.add('（', this.$global.add((item || {}).email, '）')))
        }
      }

      return;
    }
    ,

    async getBuNoticeList() {
      let bu = this.$genInitFromSchema('apis.licenseJurisdiction.structures.ApiReturnOfGetBuNoticeList', undefined);
      let returnReminderSetting = this.$genInitFromSchema('{list: nasl.collection.List<{neteaselawReminderSetting: app.dataSources.defaultDS.entities.NeteaselawReminderSetting}>, total: nasl.core.Integer}', undefined);
      let reminderSetting = this.$genInitFromSchema('{neteaselawReminderSetting: app.dataSources.defaultDS.entities.NeteaselawReminderSetting}', undefined);
      let popoto = undefined;
      let popocontent = undefined;
      let remindText = undefined;
      let reminderRecord = this.$genInitFromSchema('app.dataSources.defaultDS.entities.NeteaselawReminderRecord', undefined);
      let bulist = undefined;
      let company = this.$genInitFromSchema('app.dataSources.defaultDS.entities.NeteaselawCompany', undefined);

      bu = this.$genInitFromSchema('apis.licenseJurisdiction.structures.ApiReturnOfGetBuNoticeList', await this.$logics['app.logics.getBuNoticeList']({
        config: {
          download: false,
        },
        query: {},
        headers: {},
        path: {},
        body: {
          buCode: (this.neteaselawCompany || {}).businessFirstOrg
        }
      }))
      bulist = undefined
      if (Array.isArray((bu || {}).data)) {
        for (let index = 0; index < (((bu || {}).data || {}).length); index++) {
          const item = ((bu || {}).data)[index];
          if ((bulist) == (undefined)) {
            bulist = item
          } else {
            bulist = this.$global.add(bulist, this.$global.add(',', item))
          }

        }
      }

      if ((this.guid) == (undefined)) {
        if (((this.neteaselawCompany || {}).businessFirstOrg) != (undefined)) {
          popoto = bulist
          popocontent = this.$global.add((this.neteaselawCompany || {}).companyName, this.$global.add('公司已分配到新的BU下，需维护公司信息数据，请前往易企查系统中操作，系统链接：', await this.$global.getCustomConfig('company')))
          returnReminderSetting = this.$genInitFromSchema('{list: nasl.collection.List<{neteaselawReminderSetting: app.dataSources.defaultDS.entities.NeteaselawReminderSetting}>, total: nasl.core.Integer}', await this.$logics['app.logics.getReminderSetting']({
            config: {
              download: false,
            },
            query: {},
            headers: {},
            path: {},
            body: {
              reminderType: '公司已分配BU提醒'
            }
          }))
          if (((returnReminderSetting || {}).total) > (0)) {
            reminderSetting = this.$genInitFromSchema('{neteaselawReminderSetting: app.dataSources.defaultDS.entities.NeteaselawReminderSetting}', this.$utils['Get']((returnReminderSetting || {}).list, 0))
            if ((((reminderSetting || {}).neteaselawReminderSetting || {}).popo) != (undefined)) {
              await this.$logics['app.logics.popoApi']({
                config: {
                  download: false,
                },
                query: {},
                headers: {},
                path: {},
                body: {
                  popoto: popoto,
                  popocontent: popocontent
                }
              })
              remindText = '网易popo'
            } else {
            }

            if ((((reminderSetting || {}).neteaselawReminderSetting || {}).email) != (undefined)) {
              await this.$logics['app.logics.emailApi']({
                config: {
                  download: false,
                },
                query: {},
                headers: {},
                path: {},
                body: {
                  emailto: popoto,
                  emailcontent: popocontent
                }
              })
              if ((remindText) == (undefined)) {
                remindText = '网易邮箱'
              } else {
                remindText = this.$global.add(remindText, this.$global.add('，', '网易邮箱'))
              }

            } else {
            }

            /* 消息提醒记录 */
            reminderRecord.remindType = '公司信息变更提醒'
            reminderRecord.companyName = (this.neteaselawCompany || {}).companyName
            reminderRecord.cid = (this.neteaselawCompany || {}).guid
            reminderRecord.companyCode = (this.neteaselawCompany || {}).companyCode
            reminderRecord.reminderMode = remindText
            reminderRecord.remindDate = this.$utils['CurrDate']()
            reminderRecord.remindPeople = popoto
            reminderRecord.operator = 'System'
            this.$genInitFromSchema('app.dataSources.defaultDS.entities.NeteaselawReminderRecord', await this.$logics['app.dataSources.defaultDS.entities.NeteaselawReminderRecord.logics.create']({
              config: {
                download: false,
              },
              query: {},
              headers: {},

              body: reminderRecord
            }))
          } else {
          }

        } else {
        }

      } else {
        popoto = bulist
        /* 开发环境域名：https://test-co-entity.netease.com/qz/CompanyList



生产环境域名：https://co-entity.netease.com/qz/CompanyList */
        popocontent = this.$global.add((this.neteaselawCompany || {}).companyName, this.$global.add('公司已分配到新的BU下，需维护公司信息数据，请前往易企查系统中操作，系统链接：', 'https://co-entity.netease.com/qz/CompanyList'))
        company = this.$genInitFromSchema('app.dataSources.defaultDS.entities.NeteaselawCompany', await this.$logics['app.dataSources.defaultDS.entities.NeteaselawCompany.logics.get']({
          config: {
            download: false,
          },
          query: {},
          headers: {},
          query: {
            guid: this.guid
          },
          body: {}
        }))
        if (((this.neteaselawCompany || {}).businessFirstOrg) != ((company || {}).businessFirstOrg)) {
          returnReminderSetting = this.$genInitFromSchema('{list: nasl.collection.List<{neteaselawReminderSetting: app.dataSources.defaultDS.entities.NeteaselawReminderSetting}>, total: nasl.core.Integer}', await this.$logics['app.logics.getReminderSetting']({
            config: {
              download: false,
            },
            query: {},
            headers: {},
            path: {},
            body: {
              reminderType: '公司已分配BU提醒'
            }
          }))
          if (((returnReminderSetting || {}).total) > (0)) {
            reminderSetting = this.$genInitFromSchema('{neteaselawReminderSetting: app.dataSources.defaultDS.entities.NeteaselawReminderSetting}', this.$utils['Get']((returnReminderSetting || {}).list, 0))
            if ((((reminderSetting || {}).neteaselawReminderSetting || {}).popo) != (undefined)) {
              await this.$logics['app.logics.popoApi']({
                config: {
                  download: false,
                },
                query: {},
                headers: {},
                path: {},
                body: {
                  popoto: popoto,
                  popocontent: popocontent
                }
              })
              remindText = '网易popo'
            } else {
            }

            if ((((reminderSetting || {}).neteaselawReminderSetting || {}).email) != (undefined)) {
              await this.$logics['app.logics.emailApi']({
                config: {
                  download: false,
                },
                query: {},
                headers: {},
                path: {},
                body: {
                  emailto: popoto,
                  emailcontent: popocontent
                }
              })
              if ((remindText) == (undefined)) {
                remindText = '网易邮箱'
              } else {
                remindText = this.$global.add(remindText, this.$global.add('，', '网易邮箱'))
              }

            } else {
            }

            /* 消息提醒记录 */
            reminderRecord.remindType = '公司信息变更提醒'
            reminderRecord.companyName = (this.neteaselawCompany || {}).companyName
            reminderRecord.cid = (this.neteaselawCompany || {}).guid
            reminderRecord.companyCode = (this.neteaselawCompany || {}).companyCode
            reminderRecord.reminderMode = remindText
            reminderRecord.remindDate = this.$utils['CurrDate']()
            reminderRecord.remindPeople = popoto
            reminderRecord.operator = 'System'
            this.$genInitFromSchema('app.dataSources.defaultDS.entities.NeteaselawReminderRecord', await this.$logics['app.dataSources.defaultDS.entities.NeteaselawReminderRecord.logics.create']({
              config: {
                download: false,
              },
              query: {},
              headers: {},

              body: reminderRecord
            }))
          } else {
          }

        } else {
        }

      }

      return;
    }
    ,

    async Company_created(event) {
      await (async () => {
        let variable1 = "是";
        let variable2 = "是";
        let variable3 = "是";

        this.$genInitFromSchema('app.dataSources.defaultDS.entities.NeteaselawShareholder', this.$utils['Clear'](this.filter))
        /* 给地区字段，赋初始值为空 */
        this.neteaselawCompany.companyAddress = ''
        this.neteaselawCompany.companyCountry = ''
        /* 填充多选的内容 */
        this.$utils['Add'](this.multipleResponse, variable1)
        this.$utils['Add'](this.multipleResponse1, variable2)
        this.$utils['Add'](this.multipleResponse6, variable3)
        return;
      })();
      await (async () => {
        let jsondata = undefined;
        let retuDatePerminssion = this.$genInitFromSchema('nasl.collection.Map<nasl.core.String, nasl.collection.Map<nasl.core.String, nasl.collection.List<nasl.core.String>>>', undefined);
        let returnEntity = this.$genInitFromSchema('nasl.collection.Map<nasl.core.String, nasl.collection.List<nasl.core.String>>', undefined);
        let jsondata1 = undefined;
        let retuDatePerminssion1 = this.$genInitFromSchema('nasl.collection.Map<nasl.core.String, nasl.collection.Map<nasl.core.String, nasl.collection.List<nasl.core.String>>>', undefined);
        let returnEntity1 = this.$genInitFromSchema('nasl.collection.Map<nasl.core.String, nasl.collection.List<nasl.core.String>>', undefined);
        let companyNameList = this.$genInitFromSchema('nasl.collection.List<nasl.core.String>', undefined);
        let companyFinancialCodeList = this.$genInitFromSchema('nasl.collection.List<nasl.core.String>', undefined);
        let companyAttributeList = this.$genInitFromSchema('nasl.collection.List<nasl.core.String>', undefined);
        let companyCountryList = this.$genInitFromSchema('nasl.collection.List<nasl.core.String>', undefined);
        let legalPersonList = this.$genInitFromSchema('nasl.collection.List<nasl.core.String>', undefined);
        let companyStatusList = this.$genInitFromSchema('nasl.collection.List<nasl.core.String>', undefined);
        let dateOfIncorporationList = this.$genInitFromSchema('nasl.collection.List<nasl.core.String>', undefined);
        let tfshareholderList = this.$genInitFromSchema('nasl.collection.List<nasl.core.String>', undefined);
        let shareholderList = this.$genInitFromSchema('nasl.collection.List<nasl.core.String>', undefined);
        let shareholderRatioList = this.$genInitFromSchema('nasl.collection.List<nasl.core.String>', undefined);
        let registeredCapitalList = this.$genInitFromSchema('nasl.collection.List<nasl.core.String>', undefined);
        let contributedCapitalList = this.$genInitFromSchema('nasl.collection.List<nasl.core.String>', undefined);
        let legalRepresentativeList = this.$genInitFromSchema('nasl.collection.List<nasl.core.String>', undefined);
        let executiveCommitteeList = this.$genInitFromSchema('nasl.collection.List<nasl.core.String>', undefined);
        let presidentList = this.$genInitFromSchema('nasl.collection.List<nasl.core.String>', undefined);
        let supervisorList = this.$genInitFromSchema('nasl.collection.List<nasl.core.String>', undefined);
        let staffSizeList = this.$genInitFromSchema('nasl.collection.List<nasl.core.String>', undefined);
        let insurednumberList = this.$genInitFromSchema('nasl.collection.List<nasl.core.String>', undefined);
        let recordingCurrencyList = this.$genInitFromSchema('nasl.collection.List<nasl.core.String>', undefined);
        let businessAccountingList = this.$genInitFromSchema('nasl.collection.List<nasl.core.String>', undefined);
        let financialStatementList = this.$genInitFromSchema('nasl.collection.List<nasl.core.String>', undefined);
        let taxpayerTypeList = this.$genInitFromSchema('nasl.collection.List<nasl.core.String>', undefined);
        let taxpayeridentifyNumberList = this.$genInitFromSchema('nasl.collection.List<nasl.core.String>', undefined);
        let siteList = this.$genInitFromSchema('nasl.collection.List<nasl.core.String>', undefined);
        let phoneList = this.$genInitFromSchema('nasl.collection.List<nasl.core.String>', undefined);
        let openingBankList = this.$genInitFromSchema('nasl.collection.List<nasl.core.String>', undefined);
        let accountList = this.$genInitFromSchema('nasl.collection.List<nasl.core.String>', undefined);
        let controllingSubjectList = this.$genInitFromSchema('nasl.collection.List<nasl.core.String>', undefined);
        let headOfficeList = this.$genInitFromSchema('nasl.collection.List<nasl.core.String>', undefined);
        let unifiedSocialCreditCodesList = this.$genInitFromSchema('nasl.collection.List<nasl.core.String>', undefined);
        let outwardInvestmentList = this.$genInitFromSchema('nasl.collection.List<nasl.core.String>', undefined);
        let awaitRegisteredCapitalList = this.$genInitFromSchema('nasl.collection.List<nasl.core.String>', undefined);
        let businessFirstOrgList = this.$genInitFromSchema('nasl.collection.List<nasl.core.String>', undefined);
        let guidTrue = undefined;
        let chineseName = this.$genInitFromSchema('nasl.collection.List<nasl.core.String>', undefined);
        let englishName1 = this.$genInitFromSchema('nasl.collection.List<nasl.core.String>', undefined);
        let bearerService1 = this.$genInitFromSchema('nasl.collection.List<nasl.core.String>', undefined);
        let highTechEnterprise1 = this.$genInitFromSchema('nasl.collection.List<nasl.core.String>', undefined);
        let filialePerson1 = this.$genInitFromSchema('nasl.collection.List<nasl.core.String>', undefined);

        /* 调用用户权限 */
        /* 获取当前登录用户信息 */
        this.userPermissions = this.$genInitFromSchema('extensions.fawu_sign.structures.ResponseBodyString', await this.$logics['app.logics.getUserPermissions1']({
          config: {
            download: false,
          },
          query: {},
          headers: {},
          path: {},
          body: {
            userId: (this.$global.userInfo || {}).UserId
          }
        }))
        this.returnGetUserPermissions.code = this.$utils['Clone']((this.userPermissions || {}).code)
        this.returnGetUserPermissions.msg = this.$utils['Clone']((this.userPermissions || {}).msg)
        this.returnGetUserPermissions.data.fieldPermission = this.$genInitFromSchema('nasl.collection.Map<nasl.core.String, nasl.core.String>', this.$utils['Clone'](((this.userPermissions || {}).data || {}).fieldPermission))
        this.returnGetUserPermissions.data.dataPermission = this.$genInitFromSchema('nasl.collection.Map<nasl.core.String, nasl.core.String>', this.$utils['Clone'](((this.userPermissions || {}).data || {}).dataPermission))
        /* 取数据权限值 */
        jsondata = await JSON.stringify(((this.returnGetUserPermissions || {}).data || {}).dataPermission)
        retuDatePerminssion = this.$genInitFromSchema('nasl.collection.Map<nasl.core.String, nasl.collection.Map<nasl.core.String, nasl.collection.List<nasl.core.String>>>', await JSON.parse(jsondata))
        returnEntity = this.$genInitFromSchema('nasl.collection.Map<nasl.core.String, nasl.collection.List<nasl.core.String>>', this.$utils['MapGet'](retuDatePerminssion, 'NeteaselawCompany'))
        this.guidList = this.$genInitFromSchema('nasl.collection.List<nasl.core.String>', this.$utils['MapGet'](returnEntity, 'guid'))
        /* 取字段查看权限值 */
        jsondata1 = await JSON.stringify(((this.returnGetUserPermissions || {}).data || {}).fieldPermission)
        retuDatePerminssion1 = this.$genInitFromSchema('nasl.collection.Map<nasl.core.String, nasl.collection.Map<nasl.core.String, nasl.collection.List<nasl.core.String>>>', await JSON.parse(jsondata1))
        returnEntity1 = this.$genInitFromSchema('nasl.collection.Map<nasl.core.String, nasl.collection.List<nasl.core.String>>', this.$utils['MapGet'](retuDatePerminssion1, 'NeteaselawCompany'))
        companyNameList = this.$genInitFromSchema('nasl.collection.List<nasl.core.String>', this.$utils['MapGet'](returnEntity1, 'companyName'))
        if (((companyNameList || {}).length) > (0)) {
          this.companyName = this.$utils['Contains'](companyNameList, 'MODIFY')
        } else {
        }

        companyFinancialCodeList = this.$genInitFromSchema('nasl.collection.List<nasl.core.String>', this.$utils['MapGet'](returnEntity1, 'companyFinancialCode'))
        if (((companyFinancialCodeList || {}).length) > (0)) {
          this.companyFinancialCode = this.$utils['Contains'](companyFinancialCodeList, 'MODIFY')
        } else {
        }

        controllingSubjectList = this.$genInitFromSchema('nasl.collection.List<nasl.core.String>', this.$utils['MapGet'](returnEntity1, 'controllingSubject'))
        if (((controllingSubjectList || {}).length) > (0)) {
          this.controllingSubject = this.$utils['Contains'](controllingSubjectList, 'MODIFY')
        } else {
        }

        headOfficeList = this.$genInitFromSchema('nasl.collection.List<nasl.core.String>', this.$utils['MapGet'](returnEntity1, 'headOffice'))
        if (((headOfficeList || {}).length) > (0)) {
          this.headOffice = this.$utils['Contains'](headOfficeList, 'MODIFY')
        } else {
        }

        companyAttributeList = this.$genInitFromSchema('nasl.collection.List<nasl.core.String>', this.$utils['MapGet'](returnEntity1, 'companyAttribute'))
        if (((companyAttributeList || {}).length) > (0)) {
          this.companyAttribute = this.$utils['Contains'](companyAttributeList, 'MODIFY')
        } else {
        }

        companyCountryList = this.$genInitFromSchema('nasl.collection.List<nasl.core.String>', this.$utils['MapGet'](returnEntity1, 'companyCountry'))
        if (((companyCountryList || {}).length) > (0)) {
          this.companyCountry = this.$utils['Contains'](companyCountryList, 'MODIFY')
        } else {
        }

        legalPersonList = this.$genInitFromSchema('nasl.collection.List<nasl.core.String>', this.$utils['MapGet'](returnEntity1, 'legalPerson'))
        if (((legalPersonList || {}).length) > (0)) {
          this.legalPerson = this.$utils['Contains'](legalPersonList, 'MODIFY')
        } else {
        }

        companyStatusList = this.$genInitFromSchema('nasl.collection.List<nasl.core.String>', this.$utils['MapGet'](returnEntity1, 'companyStatus'))
        if (((companyStatusList || {}).length) > (0)) {
          this.companyStatus = this.$utils['Contains'](companyStatusList, 'MODIFY')
        } else {
        }

        dateOfIncorporationList = this.$genInitFromSchema('nasl.collection.List<nasl.core.String>', this.$utils['MapGet'](returnEntity1, 'dateOfIncorporation'))
        if (((dateOfIncorporationList || {}).length) > (0)) {
          this.dateOfIncorporation = this.$utils['Contains'](dateOfIncorporationList, 'MODIFY')
        } else {
        }

        tfshareholderList = this.$genInitFromSchema('nasl.collection.List<nasl.core.String>', this.$utils['MapGet'](returnEntity1, 'tfshareholder'))
        if (((tfshareholderList || {}).length) > (0)) {
          this.tfshareholder1 = this.$utils['Contains'](tfshareholderList, 'MODIFY')
        } else {
        }

        unifiedSocialCreditCodesList = this.$genInitFromSchema('nasl.collection.List<nasl.core.String>', this.$utils['MapGet'](returnEntity1, 'unifiedSocialCreditCodes'))
        if (((unifiedSocialCreditCodesList || {}).length) > (0)) {
          this.unifiedSocialCreditCodes = this.$utils['Contains'](unifiedSocialCreditCodesList, 'MODIFY')
        } else {
        }

        shareholderList = this.$genInitFromSchema('nasl.collection.List<nasl.core.String>', this.$utils['MapGet'](returnEntity1, 'shareholder'))
        if (((shareholderList || {}).length) > (0)) {
          this.shareholder1 = this.$utils['Contains'](shareholderList, 'MODIFY')
        } else {
        }

        shareholderRatioList = this.$genInitFromSchema('nasl.collection.List<nasl.core.String>', this.$utils['MapGet'](returnEntity1, 'shareholderRatio'))
        if (((shareholderRatioList || {}).length) > (0)) {
          this.shareholderRatio = this.$utils['Contains'](shareholderRatioList, 'MODIFY')
        } else {
        }

        registeredCapitalList = this.$genInitFromSchema('nasl.collection.List<nasl.core.String>', this.$utils['MapGet'](returnEntity1, 'registeredCapital'))
        if (((registeredCapitalList || {}).length) > (0)) {
          this.registeredCapital = this.$utils['Contains'](registeredCapitalList, 'MODIFY')
        } else {
        }

        contributedCapitalList = this.$genInitFromSchema('nasl.collection.List<nasl.core.String>', this.$utils['MapGet'](returnEntity1, 'contributedCapital'))
        if (((contributedCapitalList || {}).length) > (0)) {
          this.contributedCapital1 = this.$utils['Contains'](contributedCapitalList, 'MODIFY')
        } else {
        }

        legalRepresentativeList = this.$genInitFromSchema('nasl.collection.List<nasl.core.String>', this.$utils['MapGet'](returnEntity1, 'legalRepresentative'))
        if (((legalRepresentativeList || {}).length) > (0)) {
          this.legalRepresentative = this.$utils['Contains'](legalRepresentativeList, 'MODIFY')
        } else {
        }

        executiveCommitteeList = this.$genInitFromSchema('nasl.collection.List<nasl.core.String>', this.$utils['MapGet'](returnEntity1, 'executiveCommittee'))
        if (((executiveCommitteeList || {}).length) > (0)) {
          this.executiveCommittee = this.$utils['Contains'](executiveCommitteeList, 'MODIFY')
        } else {
        }

        presidentList = this.$genInitFromSchema('nasl.collection.List<nasl.core.String>', this.$utils['MapGet'](returnEntity1, 'president'))
        if (((presidentList || {}).length) > (0)) {
          this.president = this.$utils['Contains'](presidentList, 'MODIFY')
        } else {
        }

        supervisorList = this.$genInitFromSchema('nasl.collection.List<nasl.core.String>', this.$utils['MapGet'](returnEntity1, 'supervisor'))
        if (((supervisorList || {}).length) > (0)) {
          this.supervisor = this.$utils['Contains'](supervisorList, 'MODIFY')
        } else {
        }

        /* 税务信息 */
        staffSizeList = this.$genInitFromSchema('nasl.collection.List<nasl.core.String>', this.$utils['MapGet'](returnEntity1, 'staffSize'))
        if (((staffSizeList || {}).length) > (0)) {
          this.staffSize = this.$utils['Contains'](staffSizeList, 'MODIFY')
        } else {
        }

        insurednumberList = this.$genInitFromSchema('nasl.collection.List<nasl.core.String>', this.$utils['MapGet'](returnEntity1, 'insurednumber'))
        if (((insurednumberList || {}).length) > (0)) {
          this.insurednumber = this.$utils['Contains'](insurednumberList, 'MODIFY')
        } else {
        }

        recordingCurrencyList = this.$genInitFromSchema('nasl.collection.List<nasl.core.String>', this.$utils['MapGet'](returnEntity1, 'recordingCurrency'))
        if (((recordingCurrencyList || {}).length) > (0)) {
          this.recordingCurrency = this.$utils['Contains'](recordingCurrencyList, 'MODIFY')
        } else {
        }

        businessAccountingList = this.$genInitFromSchema('nasl.collection.List<nasl.core.String>', this.$utils['MapGet'](returnEntity1, 'businessAccounting'))
        if (((businessAccountingList || {}).length) > (0)) {
          this.businessAccounting = this.$utils['Contains'](businessAccountingList, 'MODIFY')
        } else {
        }

        financialStatementList = this.$genInitFromSchema('nasl.collection.List<nasl.core.String>', this.$utils['MapGet'](returnEntity1, 'financialStatement'))
        if (((financialStatementList || {}).length) > (0)) {
          this.financialStatement = this.$utils['Contains'](financialStatementList, 'MODIFY')
        } else {
        }

        taxpayerTypeList = this.$genInitFromSchema('nasl.collection.List<nasl.core.String>', this.$utils['MapGet'](returnEntity1, 'taxpayerType'))
        if (((taxpayerTypeList || {}).length) > (0)) {
          this.taxpayerType = this.$utils['Contains'](taxpayerTypeList, 'MODIFY')
        } else {
        }

        taxpayeridentifyNumberList = this.$genInitFromSchema('nasl.collection.List<nasl.core.String>', this.$utils['MapGet'](returnEntity1, 'taxpayeridentifyNumber'))
        if (((taxpayeridentifyNumberList || {}).length) > (0)) {
          this.taxpayeridentifyNumber = this.$utils['Contains'](taxpayeridentifyNumberList, 'MODIFY')
        } else {
        }

        siteList = this.$genInitFromSchema('nasl.collection.List<nasl.core.String>', this.$utils['MapGet'](returnEntity1, 'site'))
        if (((siteList || {}).length) > (0)) {
          this.site = this.$utils['Contains'](siteList, 'MODIFY')
        } else {
        }

        phoneList = this.$genInitFromSchema('nasl.collection.List<nasl.core.String>', this.$utils['MapGet'](returnEntity1, 'phone'))
        if (((phoneList || {}).length) > (0)) {
          this.phone = this.$utils['Contains'](phoneList, 'MODIFY')
        } else {
        }

        openingBankList = this.$genInitFromSchema('nasl.collection.List<nasl.core.String>', this.$utils['MapGet'](returnEntity1, 'openingBank'))
        if (((openingBankList || {}).length) > (0)) {
          this.openingBank = this.$utils['Contains'](openingBankList, 'MODIFY')
        } else {
        }

        accountList = this.$genInitFromSchema('nasl.collection.List<nasl.core.String>', this.$utils['MapGet'](returnEntity1, 'account'))
        if (((accountList || {}).length) > (0)) {
          this.account = this.$utils['Contains'](accountList, 'MODIFY')
        } else {
        }

        /* 对外投资情况 */
        outwardInvestmentList = this.$genInitFromSchema('nasl.collection.List<nasl.core.String>', this.$utils['MapGet'](returnEntity1, 'outwardInvestment'))
        if (((outwardInvestmentList || {}).length) > (0)) {
          this.outwardInvestment2 = this.$utils['Contains'](outwardInvestmentList, 'MODIFY')
        } else {
        }

        /* 待出资 */
        awaitRegisteredCapitalList = this.$genInitFromSchema('nasl.collection.List<nasl.core.String>', this.$utils['MapGet'](returnEntity1, 'awaitRegisteredCapital'))
        if (((awaitRegisteredCapitalList || {}).length) > (0)) {
          this.awaitRegisteredCapital = this.$utils['Contains'](awaitRegisteredCapitalList, 'MODIFY')
        } else {
        }

        businessFirstOrgList = this.$genInitFromSchema('nasl.collection.List<nasl.core.String>', this.$utils['MapGet'](returnEntity1, 'businessFirstOrg'))
        if (((businessFirstOrgList || {}).length) > (0)) {
          this.businessFirstOrg = this.$utils['Contains'](businessFirstOrgList, 'MODIFY')
        } else {
        }

        chineseName = this.$genInitFromSchema('nasl.collection.List<nasl.core.String>', this.$utils['MapGet'](returnEntity1, 'chineseName'))
        if (((chineseName || {}).length) > (0)) {
          this.chineseName1 = this.$utils['Contains'](chineseName, 'MODIFY')
        } else {
        }

        englishName1 = this.$genInitFromSchema('nasl.collection.List<nasl.core.String>', this.$utils['MapGet'](returnEntity1, 'englishName'))
        if (((englishName1 || {}).length) > (0)) {
          this.englishName = this.$utils['Contains'](englishName1, 'MODIFY')
        } else {
        }

        bearerService1 = this.$genInitFromSchema('nasl.collection.List<nasl.core.String>', this.$utils['MapGet'](returnEntity1, 'bearerService'))
        if (((bearerService1 || {}).length) > (0)) {
          this.bearerService = this.$utils['Contains'](bearerService1, 'MODIFY')
        } else {
        }

        highTechEnterprise1 = this.$genInitFromSchema('nasl.collection.List<nasl.core.String>', this.$utils['MapGet'](returnEntity1, 'highTechEnterprise'))
        if (((highTechEnterprise1 || {}).length) > (0)) {
          this.highTechEnterprise = this.$utils['Contains'](highTechEnterprise1, 'MODIFY')
        } else {
        }

        filialePerson1 = this.$genInitFromSchema('nasl.collection.List<nasl.core.String>', this.$utils['MapGet'](returnEntity1, 'filialePerson'))
        if (((filialePerson1 || {}).length) > (0)) {
          this.filialePerson2 = this.$utils['Contains'](filialePerson1, 'MODIFY')
        } else {
        }

        /* 调用进入事件 */
        guidTrue = this.$utils['Contains'](this.guidList, this.$utils['Convert'](this.guid, {
          "concept": "TypeAnnotation",
          "name": "",
          "typeKind": "primitive",
          "typeNamespace": "nasl.core",
          "typeName": "String",
          "typeArguments": null,
          "returnType": null,
          "properties": null
        }))
        this.neteaselawCompany.registeredCapitalCurrency = 'CNY'
        if ((guidTrue) == (true)) {
          await this.enterSelectupdate()
        } else {
        }

        return;
      })();
    }
    ,

    async Company_mounted(event) {
      await (async () => {

        if ((this.guid) != (undefined)) {
          await this.$refs.uLinearLayout1.openLoading()
          await (async () => {
            setTimeout(() => {
              this.$refs.uLinearLayout1.closeLoading();
            }, 3000)
          })();
        } else {
          await this.$refs.uLinearLayout1.openLoading()
          await (async () => {
            setTimeout(() => {
              this.$refs.uLinearLayout1.closeLoading();
            }, 1500)
          })();
        }

        return;
      })();
    }
    ,

    async select5_select(event) {
      await (async () => {
        let variable1 = undefined;

        this.neteaselawCompany.companyAddress = variable1
        this.neteaselawCompany.companyAddressDetails = variable1
        return;
      })();
    }
    ,

    async select10_select(event) {
      await (async () => {

        if (((this.neteaselawCompany || {}).registeredCapitalCurrency) == ('CNY')) {
          this.registeredCNY = undefined
          this.neteaselawCompany.registeredCapitalCNY = undefined
        } else {
        }

        return;
      })();
    }
    ,

    async select10_close(event) {
      await (async () => {

        if (((this.neteaselawCompany || {}).registeredCapitalCurrency) == (undefined)) {
          this.neteaselawCompany.registeredCapitalCurrency = 'CNY'
        } else {
        }

        return;
      })();
    }
    ,

    async select21_beforefilter(event) {
      await (async () => {

        await this.selectUser(event)
        return;
      })();
    }
    ,

    async select15_beforefilter(event) {
      await (async () => {

        await this.selectUser1(event)
        return;
      })();
    }
    ,

    async select14_select(event) {
      await (async () => {

        if (((this.neteaselawCompany || {}).contributedCapitalCurrency) == ('CNY')) {
          this.contributedCNY = undefined
          this.neteaselawCompany.contributedCapitalCurrencyCNY = undefined
        } else {
        }

        return;
      })();
    }
    ,

    async linear_layout34_click(event) {
      await (async () => {
        let variable1 = this.$genInitFromSchema('app.dataSources.defaultDS.entities.NeteaselawContributedCapital', undefined);
        let variable2 = this.$genInitFromSchema('app.dataSources.defaultDS.entities.NeteaselawContributedCapital', undefined);

        variable1 = variable2
        variable1.investorData = this.$utils['CurrDate']()
        variable1.originalCurrency = 0
        variable1.cNY = 0
        variable1.registeredCurrency = 0
        this.$utils['Add'](this.listContributedCapital, this.$genInitFromSchema('app.dataSources.defaultDS.entities.NeteaselawContributedCapital', this.$utils['Clone'](variable1)))
        return;
      })();
    }
    ,

    async checkboxes1_change(event) {
      await (async () => {

        this.multipleResponse4 = this.$utils['Get'](this.multipleResponse2, 0)
        if ((this.multipleResponse4) == ('是')) {
          this.neteaselawCompany.businessAccounting = this.multipleResponse4
        } else {
          this.neteaselawCompany.businessAccounting = undefined
        }

        return;
      })();
    }
    ,

    async checkboxes2_change(event) {
      await (async () => {

        this.multipleResponse5 = this.$utils['Get'](this.multipleResponse3, 0)
        if ((this.multipleResponse5) == ('是')) {
          this.neteaselawCompany.financialStatement = this.multipleResponse5
        } else {
          this.neteaselawCompany.financialStatement = undefined
        }

        return;
      })();
    }
    ,

    async checkboxes5_change(event) {
      await (async () => {

        this.multipleResponse8 = this.$utils['Get'](this.multipleResponse7, 0)
        if ((this.multipleResponse8) == ('是')) {
          this.neteaselawCompany.highTechEnterprise = this.multipleResponse8
        } else {
          this.neteaselawCompany.highTechEnterprise = undefined
        }

        return;
      })();
    }
    ,

    async button1_click(event) {
      await (async () => {
        let validateResult = this.$genInitFromSchema('nasl.ui.ValidateEvent', undefined);
        let returnNeteaselawCompany = this.$genInitFromSchema('app.dataSources.defaultDS.entities.NeteaselawCompany', undefined);
        let NeteaselawInteriorORexternal = this.$genInitFromSchema('app.dataSources.defaultDS.entities.NeteaselawInteriorORexternal', undefined);
        let shareholder = this.$genInitFromSchema('app.dataSources.defaultDS.entities.NeteaselawShareholder', undefined);
        let variable1 = undefined;

        /* 通过邮箱查询到名称进行存储 */
        await this.changeText()
        /* 是否有外部股东判断 */
        if (((this.listNeteaselawShareholder || {}).length) > (0)) {
          /* 只要能进来，说明股东是有数据的，默认给vab1，是否有外部股东判断为false没有，经过循环判断里面的数据，如果有为2的数据，说明有，就赋值为true */
          variable1 = false
          if (Array.isArray(this.listNeteaselawShareholder)) {
            for (let index = 0; index < ((this.listNeteaselawShareholder || {}).length); index++) {
              const item = (this.listNeteaselawShareholder)[index];
              if (((item || {}).shareholder) == ("2")) {
                variable1 = true
              } else {
              }

            }
          }

          if ((variable1) == (true)) {
            this.neteaselawCompany.tfshareholder = '是'
          } else {
            this.neteaselawCompany.tfshareholder = '否'
          }

        } else {
        }

        validateResult = await this.$refs.form1.validate()
        if ((validateResult || {}).valid) {
          /* 如果当前登陆人是管理员，就把下方所有if校验都过滤，状态全给false */
          if ((((this.userPermissions || {}).data || {}).admin) == (true)) {
            this.judgeinteriorORexternal = false
            this.judgeNeteaselawShareholder = false
            this.sumshareholdingRatio = false
          } else {
          }

          /* 判断股东是否有空值或者持股比例是否满足100% */
          if ((((this.judgeNeteaselawShareholder) == (false)) && ((this.sumshareholdingRatio) == (false))) || ((this.shareholder1) != (true))) {
            if ((this.guid) == (undefined)) {
              await this.$refs.uLinearLayout1.openLoading()
              /* BU提醒 */
              await this.getBuNoticeList()
              this.neteaselawCompany.creator = (this.$global.userInfo || {}).UserName
              this.neteaselawCompany.createDate = this.$utils['CurrDateTime']()
              /* 生成公司编码Code */
              await this.companyCode()
              /* 处理币种储存金 */
              await this.registered1()
              if (((this.neteaselawCompany || {}).companyAddress) == ('')) {
                this.neteaselawCompany.companyAddress = undefined
              } else {
              }

              if (((this.neteaselawCompany || {}).companyCountry) == ('')) {
                this.neteaselawCompany.companyCountry = undefined
              } else {
              }

              if ((this.companyDateOfEstablishment) != (undefined)) {
                this.neteaselawCompany.dateOfIncorporation = this.$utils['Convert'](this.companyDateOfEstablishment, {
                  "concept": "TypeAnnotation",
                  "changedTime": null,
                  "branchName": null,
                  "workingCopy": null,
                  "branch": null,
                  "name": "",
                  "typeKind": "primitive",
                  "typeNamespace": "nasl.core",
                  "typeName": "DateTime",
                  "typeArguments": null,
                  "returnType": null,
                  "inferred": null,
                  "properties": null,
                  "ruleMap": null
                })
              } else {
              }

              this.neteaselawCompany.manual = '0'
              returnNeteaselawCompany = this.$genInitFromSchema('app.dataSources.defaultDS.entities.NeteaselawCompany', await this.$logics['app.dataSources.defaultDS.entities.NeteaselawCompany.logics.create']({
                config: {
                  download: false,
                },
                query: {},
                headers: {},

                body: this.neteaselawCompany
              }))
              this.guidren = this.$utils['Clone']((this.neteaselawCompany || {}).guid)
              /* 实缴资本新增 */
              await this.createContributedCapital((returnNeteaselawCompany || {}).guid)
              if (Array.isArray(this.listNeteaselawShareholder)) {
                for (let index = 0; index < ((this.listNeteaselawShareholder || {}).length); index++) {
                  const item = (this.listNeteaselawShareholder)[index];
                  this.$genInitFromSchema('app.dataSources.defaultDS.entities.NeteaselawShareholder', this.$utils['Clear'](shareholder))
                  item.cid = (returnNeteaselawCompany || {}).guid
                  if ((((item || {}).shareholderNameEmail || {}).shareholderNameEmail) == ('其他')) {
                    item.shareholderName = (item || {}).userDefined
                    item.userDefined = '其他'
                    item.shareholderNameEmail.shareholderNameEmail = undefined
                  } else {
                  }

                  if (((item || {}).shareholder) == ("2")) {
                    item.shareholderName = (item || {}).userDefined
                  } else {
                  }

                  shareholder.id = (item || {}).id
                  shareholder.createdTime = (item || {}).createdTime
                  shareholder.updatedTime = (item || {}).updatedTime
                  shareholder.createdBy = (item || {}).createdBy
                  shareholder.updatedBy = (item || {}).updatedBy
                  shareholder.shareholderName = (item || {}).shareholderName
                  shareholder.cid = (item || {}).cid
                  shareholder.shareholdingRatio = (item || {}).shareholdingRatio
                  shareholder.userDefined = (item || {}).userDefined
                  shareholder.shareholder = (item || {}).shareholder
                  shareholder.shareholderNameEmail = ((item || {}).shareholderNameEmail || {}).shareholderNameEmail
                  this.$genInitFromSchema('app.dataSources.defaultDS.entities.NeteaselawShareholder', await this.$logics['app.dataSources.defaultDS.entities.NeteaselawShareholder.logics.create']({
                    config: {
                      download: false,
                    },
                    query: {},
                    headers: {},

                    body: shareholder
                  }))
                }
              }

              /* 财务投资情况的添加 */
              if (Array.isArray(this.listinteriorORexternal)) {
                for (let index = 0; index < ((this.listinteriorORexternal || {}).length); index++) {
                  const item = (this.listinteriorORexternal)[index];
                  NeteaselawInteriorORexternal.interiorORexternal = this.$utils['Clone']((item || {}).interiorORexternal)
                  if ((((item || {}).text) == ('如不存在，请输入')) || (((item || {}).interiorORexternal) == ('对外投资'))) {
                    if (((item || {}).interiorORexternal) == ('对外投资')) {
                      NeteaselawInteriorORexternal.text = (item || {}).text
                    } else {
                      NeteaselawInteriorORexternal.text = undefined
                    }

                    NeteaselawInteriorORexternal.companyName = (item || {}).companyName
                    NeteaselawInteriorORexternal.type = "0"
                  } else {
                    /* 如果是内部选择的，那么就把值放入到custom */
                    NeteaselawInteriorORexternal.companyName = (item || {}).text
                    item.text = undefined
                    NeteaselawInteriorORexternal.type = "1"
                  }

                  NeteaselawInteriorORexternal.investmentAmount = (item || {}).investmentAmount
                  NeteaselawInteriorORexternal.currency = (item || {}).currency
                  NeteaselawInteriorORexternal.shareholdingRatio = (item || {}).shareholdingRatio
                  NeteaselawInteriorORexternal.cid = (returnNeteaselawCompany || {}).guid
                  this.$genInitFromSchema('app.dataSources.defaultDS.entities.NeteaselawInteriorORexternal', await this.$logics['app.dataSources.defaultDS.entities.NeteaselawInteriorORexternal.logics.create']({
                    config: {
                      download: false,
                    },
                    query: {},
                    headers: {},

                    body: NeteaselawInteriorORexternal
                  }))
                }
              }

              /* 变更记录 （新增） */
              await this.createChangeRecord((returnNeteaselawCompany || {}).guid)
              await this.$toast.show('创建成功！')
              /* 调用币种启用 */
              await this.currencyStartUsing()
              await (async () => {
                setTimeout(() => {
                  this.$refs.uLinearLayout1.closeLoading();
                }, 500)
              })();
              this.$destination(`/CompanyList`, "_self")
            } else {
              await this.$refs.uLinearLayout1.openLoading()
              /* BU提醒 */
              await this.getBuNoticeList()
              /* 记录修改 */
              await this.updateNeteaselawChangeRecord()
              /* 如果修改了，状态改为1，就不定时提醒管理员了 */
              if (((this.neteaselawCompany || {}).manual) == ('0')) {
                this.neteaselawCompany.manual = '1'
              } else {
              }

              /* 处理币种储存金 */
              await this.registered1()
              if ((this.companyDateOfEstablishment) != (undefined)) {
                this.neteaselawCompany.dateOfIncorporation = this.$utils['Convert'](this.companyDateOfEstablishment, {
                  "concept": "TypeAnnotation",
                  "changedTime": null,
                  "branchName": null,
                  "workingCopy": null,
                  "branch": null,
                  "name": "",
                  "typeKind": "primitive",
                  "typeNamespace": "nasl.core",
                  "typeName": "DateTime",
                  "typeArguments": null,
                  "returnType": null,
                  "inferred": null,
                  "properties": null,
                  "ruleMap": null
                })
              } else {
              }

              /* 修改实缴资本 */
              this.variable10 = this.$genInitFromSchema('app.dataSources.defaultDS.entities.NeteaselawCompany', await this.$logics['app.dataSources.defaultDS.entities.NeteaselawCompany.logics.update']({
                config: {
                  download: false,
                },
                query: {},
                headers: {},

                body: this.neteaselawCompany
              }))
              await this.updateContributedCapital()
              /* 股东修改/新增 */
              await this.updateORcreatea()
              /* 调用对外投资 */
              await this.createORupdateNeteaselawInteriorORexternal()
              if ((this.updateRecord) != (undefined)) {
                await this.popoAndEmailUpdate()
              } else {
              }

              await this.$toast.show('修改成功！')
              /* 调用币种启用 */
              await this.currencyStartUsing()
              /* 刷新调用，重新调用进入时事件。清空对外投资表格和股东表格和实缴资本表格 */
              this.$genInitFromSchema('nasl.collection.List<app.dataSources.defaultDS.entities.NeteaselawInteriorORexternal>', this.$utils['Clear'](this.listinteriorORexternal))
              this.$genInitFromSchema('nasl.collection.List<app.structures.Shareholder>', this.$utils['Clear'](this.listNeteaselawShareholder))
              this.$genInitFromSchema('nasl.collection.List<app.dataSources.defaultDS.entities.NeteaselawContributedCapital>', this.$utils['Clear'](this.listContributedCapital))
              await (async () => {
                setTimeout(() => {
                  this.$refs.uLinearLayout1.closeLoading();
                }, 1000)
              })();
              this.$destination(`/CompanyList`, "_self")
            }

          } else {
            if ((this.judgeNeteaselawShareholder) == (true)) {
              await this.$toast.show('股东所有内容都需必填')
            } else {
            }

            if ((this.sumshareholdingRatio) == (true)) {
              await this.$toast.show('持股比例多条相加，需等于100%')
            } else {
            }

          }

        } else {
        }

        return;
      })();
    }
    ,

    async select8_select(event, current) {
      await (async () => {

        await this.SumContributedCapital()
        return;
      })();
    }
    ,

    async number_input11_change(event, current) {
      await (async () => {

        await this.SumContributedCapital()
        return;
      })();
    }
    ,

    async number_input4_change(event, current) {
      await (async () => {

        await this.SumContributedCapital()
        return;
      })();
    }
    ,

    async link1_click(event, current) {
      await (async () => {
        let variable1 = this.$genInitFromSchema('app.dataSources.defaultDS.entities.NeteaselawContributedCapital', undefined);
        let variable2 = this.$genInitFromSchema('app.dataSources.defaultDS.entities.NeteaselawContributedCapital', undefined);

        variable1 = variable2
        variable1.investor = ((current || {}).item || {}).investor
        variable1.investorData = ((current || {}).item || {}).investorData
        variable1.investorName = ((current || {}).item || {}).investorName
        variable1.originalCurrency = ((current || {}).item || {}).originalCurrency
        variable1.cNY = ((current || {}).item || {}).cNY
        variable1.registeredCurrency = ((current || {}).item || {}).registeredCurrency
        this.$utils['Add'](this.listContributedCapital, this.$genInitFromSchema('app.dataSources.defaultDS.entities.NeteaselawContributedCapital', this.$utils['Clone'](variable1)))
        await this.SumContributedCapital()
        return;
      })();
    }
    ,

    async link2_click(event, current) {
      await (async () => {

        this.$genInitFromSchema('app.dataSources.defaultDS.entities.NeteaselawContributedCapital', this.$utils['RemoveAt'](this.listContributedCapital, (current || {}).index))
        await this.$refs.tableView1.reload()
        await this.SumContributedCapital()
        return;
      })();
    }
    ,

    async button3_click(event) {
      await (async () => {

        this.judgeNeteaselawShareholder = true
        return;
      })();
      await (async () => {
        let sum = undefined;

        sum = 0
        if (Array.isArray(this.listNeteaselawShareholder)) {
          for (let index = 0; index < ((this.listNeteaselawShareholder || {}).length); index++) {
            const item = (this.listNeteaselawShareholder)[index];
            sum = this.$global.add(sum, (item || {}).shareholdingRatio)
          }
        }

        if ((sum) == (100)) {
          this.sumshareholdingRatio = true
        } else {
          this.sumshareholdingRatio = false
        }

        return;
      })();
      await (async () => {
        let NeteaselawShareholder = this.$genInitFromSchema('app.structures.Shareholder', undefined);

        this.$utils['Add'](this.listNeteaselawShareholder, this.$genInitFromSchema('app.structures.Shareholder', this.$utils['Clone'](NeteaselawShareholder)))
        await this.disposeApi()
        return;
      })();
    }
    ,

    async button4_click(event) {
      await (async () => {

        this.judgeinteriorORexternal = true
        return;
      })();
      await (async () => {
        let variable1 = this.$genInitFromSchema('app.dataSources.defaultDS.entities.NeteaselawInteriorORexternal', undefined);

        variable1.interiorORexternal = undefined
        variable1.text = undefined
        variable1.companyName = undefined
        this.$utils['Add'](this.listinteriorORexternal, variable1)
        return;
      })();
    }
    ,

    async select4_select(event, current) {
      await (async () => {

        await this.forjudge()
        current.item.text = undefined
        current.item.companyName = undefined
        this.judgeinteriorORexternal = true
        return;
      })();
    }
    ,

    async select12_select(event, current) {
      await (async () => {

        await this.forjudge()
        return;
      })();
    }
    ,

    async input6_blur(event, current) {
      await (async () => {

        await this.forjudge()
        return;
      })();
    }
    ,

    async select_select(event, current) {
      await (async () => {

        if (((this.neteaselawCompany || {}).contributedCapitalCurrency) == ('CNY')) {
          this.contributedCNY = undefined
          this.neteaselawCompany.contributedCapitalCurrencyCNY = undefined
        } else {
        }

        return;
      })();
    }
    ,

    async ico2_click(event, current) {
      await (async () => {

        this.$genInitFromSchema('app.dataSources.defaultDS.entities.NeteaselawInteriorORexternal', this.$utils['RemoveAt'](this.listinteriorORexternal, (current || {}).index))
        await this.$refs.table_view3.reload()
        return;
      })();
    }
    ,

    async select17_change(event, current) {
      await (async () => {

        if ((((current || {}).item || {}).shareholder) == ("0")) {
          current.item.userDefined = ''
        } else {
        }

        await this.judge1NeteaselawShareholder()
        await this.sumrutio()
        return;
      })();
    }
    ,

    async select17_select(event, current) {
      await (async () => {

        current.item.shareholderNameEmail.shareholderNameEmail = undefined
        current.item.shareholdingRatio = undefined
        return;
      })();
    }
    ,

    async select11_select(event, current) {
      await (async () => {

        await this.judge1NeteaselawShareholder()
        return;
      })();
    }
    ,

    async select7_select(event, current) {
      await (async () => {
        let user = this.$genInitFromSchema('apis.licenseJurisdiction.structures.ApiReturnOfSearchUser', undefined);
        let username = this.$genInitFromSchema('apis.licenseJurisdiction.structures.EhrUserRespVO', undefined);

        if (((((current || {}).item || {}).shareholderNameEmail || {}).shareholderNameEmail) != ('其他')) {
          current.item.userDefined = ''
          user = this.$genInitFromSchema('apis.licenseJurisdiction.structures.ApiReturnOfSearchUser', await this.$logics['app.logics.faw_SearchUser']({
            config: {
              download: false,
            },
            query: {},
            headers: {},
            path: {},
            body: {
              userid: (((current || {}).item || {}).shareholderNameEmail || {}).shareholderNameEmail,
              search: (((current || {}).item || {}).shareholderNameEmail || {}).shareholderNameEmail
            }
          }))
          if ((((user || {}).data || {}).length) > (0)) {
            username = this.$genInitFromSchema('apis.licenseJurisdiction.structures.EhrUserRespVO', this.$utils['Get']((user || {}).data, 0))
            current.item.shareholderName = (username || {}).userName
          } else {
          }

        } else {
        }

        return;
      })();
    }
    ,

    async select7_beforefilter(event, current) {
      await (async () => {

        await console.log('wrerwe')
        await this.selectUser2(event)
        return;
      })();
    }
    ,

    async button8_click(event, current) {
      await (async () => {

        current.item.shareholderNameEmail.shareholderNameEmail = '其他'
        return;
      })();
    }
    ,

    async input11_blur(event, current) {
      await (async () => {

        await this.judge1NeteaselawShareholder()
        return;
      })();
    }
    ,

    async number_input5_change(event, current) {
      await (async () => {
        let sum = undefined;

        sum = 0
        if (Array.isArray(this.listNeteaselawShareholder)) {
          for (let index = 0; index < ((this.listNeteaselawShareholder || {}).length); index++) {
            const item = (this.listNeteaselawShareholder)[index];
            if ((sum) == (0)) {
              sum = this.$utils['Clone']((item || {}).shareholdingRatio)
            } else {
              sum = this.$global.add(this.$utils['Clone'](sum), this.$utils['Clone']((item || {}).shareholdingRatio))
            }

          }
        }

        if ((sum) == (100)) {
          this.sumshareholdingRatio = false
        } else {
          this.sumshareholdingRatio = true
        }

        return;
      })();
    }
    ,

    async number_input5_blur(event, current) {
      await (async () => {

        await this.judge1NeteaselawShareholder()
        return;
      })();
    }
    ,

    async ico4_click(event, current) {
      await (async () => {

        this.$genInitFromSchema('app.structures.Shareholder', this.$utils['RemoveAt'](this.listNeteaselawShareholder, (current || {}).index))
        await this.$refs.tableView.reload()
        return;
      })();
    }

  },
  created() {
    this.Company_created();
  },

  mounted() {
    this.Company_mounted();
  }
};

</script>
