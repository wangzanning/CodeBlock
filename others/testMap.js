// 驼峰格式 转 下划线格式  camelCase -> snake_case
console.log(camelCaseToSnakeCase('camelCaseToSnakeCase'));
function camelCaseToSnakeCase(str) {
  return str.replace(/([A-Z])/g, '_$1').toLowerCase();
}

// 下划线格式 转 驼峰格式  snake_case -> camelCase
console.log(snakeCaseToCamelCase('snake_case_to_camel_case'));
function snakeCaseToCamelCase(str) {
  return str.replace(/_([a-z])/g, function ($0, $1) {
    return $1.toUpperCase();
  });
}

// add element to head
<meta name="facebook-domain-verification" content="p0e12jggdvtj2dclgpmjm0ux7d467u" />
document.head.insertAdjacentHTML('beforeend', '<meta name="facebook-domain-verification" content="p0e12jggdvtj2dclgpmjm0ux7d467u" />');
