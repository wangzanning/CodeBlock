<template>
    <u-linear-layout ref="uLinearLayout1" style="height:100%; --custom-start: auto; min-height: 200px;" type="root" gap="none">
        <u-router-view ref="router_view1"></u-router-view>
        <u-linear-layout ref="linear_layout1" direction="vertical">
            <u-linear-layout ref="linear_layout3">
                <u-gallery ref="gallery1" style="height:100px;color:#000000;" :data-source="companyInfo && companyInfo.picture" :num="1" :style="{'background-color': #000000}"></u-gallery>
            </u-linear-layout>
            <u-linear-layout ref="linear_layout6">
                <u-image ref="image1" style="height:600px;" src="//lcap-static-saas.nos-eastchina1.126.net/assets/cloud-ui/1.jpg" fit="contain"></u-image>
            </u-linear-layout>
            <u-linear-layout ref="linear_layout5"></u-linear-layout>
            <u-linear-layout ref="linear_layout4"></u-linear-layout>
        </u-linear-layout>
    </u-linear-layout>

</template>
<script>
export default {

    data() {
        return {
            ['companyInfo']: this.$genInitFromSchema({"concept":"TypeAnnotation","name":"","typeKind":"reference","typeNamespace":"app.dataSources.defaultDS.entities","typeName":"Companyinfo","typeArguments":null,"returnType":null,"properties":null}, undefined)
        };
    },
    meta: {
        title: "首页",
        crumb: null,
        first: undefined,
        auth: undefined,
    },
    methods: {
        async load () {
            let result = this.$genInitFromSchema({"concept":"TypeAnnotation","name":"","typeKind":"anonymousStructure","typeArguments":null,"returnType":null,"properties":[{"concept":"StructureProperty","name":"list","typeAnnotation":{"concept":"TypeAnnotation","name":"","typeKind":"generic","typeNamespace":"nasl.collection","typeName":"List","typeArguments":[{"concept":"TypeAnnotation","name":"","typeKind":"anonymousStructure","typeArguments":null,"returnType":null,"properties":[{"concept":"StructureProperty","name":"companyinfo","typeAnnotation":{"concept":"TypeAnnotation","name":"","typeKind":"reference","typeNamespace":"app.dataSources.defaultDS.entities","typeName":"Companyinfo","typeArguments":null,"returnType":null,"properties":null},"isLeaf":true}]}],"returnType":null,"properties":null},"isLeaf":true},{"concept":"StructureProperty","name":"total","typeAnnotation":{"concept":"TypeAnnotation","name":"","typeKind":"primitive","typeNamespace":"nasl.core","typeName":"Integer","typeArguments":null,"returnType":null,"properties":null},"isLeaf":true}]}, undefined);

            result = this.$genInitFromSchema({"concept":"TypeAnnotation","name":"","typeKind":"anonymousStructure","typeArguments":null,"returnType":null,"properties":[{"concept":"StructureProperty","name":"list","typeAnnotation":{"concept":"TypeAnnotation","name":"","typeKind":"generic","typeNamespace":"nasl.collection","typeName":"List","typeArguments":[{"concept":"TypeAnnotation","name":"","typeKind":"anonymousStructure","typeArguments":null,"returnType":null,"properties":[{"concept":"StructureProperty","name":"companyinfo","typeAnnotation":{"concept":"TypeAnnotation","name":"","typeKind":"reference","typeNamespace":"app.dataSources.defaultDS.entities","typeName":"Companyinfo","typeArguments":null,"returnType":null,"properties":null},"isLeaf":true}]}],"returnType":null,"properties":null},"isLeaf":true},{"concept":"StructureProperty","name":"total","typeAnnotation":{"concept":"TypeAnnotation","name":"","typeKind":"primitive","typeNamespace":"nasl.core","typeName":"Integer","typeArguments":null,"returnType":null,"properties":null},"isLeaf":true}]}, await this.$logics['app.logics.loadFirstPage']({
                config: {
                    download: false,
                },
                query: {},
                headers: {},
                path: {},
                body: {
                }
            }));
            if(Array.isArray(result && result.list)) {
                for (let index = 0; index < (result && result.list && result.list.length); index++) {
                    const item = result && result.list[index];
                    this.companyInfo = this.$genInitFromSchema({"concept":"TypeAnnotation","name":"","typeKind":"reference","typeNamespace":"app.dataSources.defaultDS.entities","typeName":"Companyinfo","typeArguments":null,"returnType":null,"properties":null}, item.companyinfo);
                }
            }

            await console.log(this.companyInfo && this.companyInfo.picture)
            return result;
        }
        ,

        async FristPage_created (event) {
            (async () => {

                await this.load()
                return;
            })();
        }

    },
    created () {
        this.FristPage_created();}
};

</script>
