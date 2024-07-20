import LuckyExcel from 'luckyexcel';

function uploadExcel(luckysheet,file) {
  if (file == null || file.length == 0) {
    alert('文件为空，请重新选择文件');
    return;
  }
  let name = file[0].name;
  let suffixArr = name.split('.'),
    suffix = suffixArr[suffixArr.length - 1];
  if (suffix != 'xlsx') {
    alert('只支持xlsx文件，请重新选择');
    return;
  }
  luckysheet.destroy(); // 先销毁当前容器
  LuckyExcel.transformExcelToLucky(file[0], function(exportJson, luckysheetfile) {
    console.log(exportJson);
    if (exportJson.sheets == null || exportJson.sheets.length == 0) {
      alert('读取excel文件内容失败，目前不支持xls文件!');
      return;
    }
    luckysheet.create({
      container: 'luckysheet',
      data: exportJson.sheets,
      title: exportJson.info.name,
      userInfo: exportJson.info.name.creator,
      lang: 'zh',
      showtoolbar: true,
      showtoolbarConfig: true,
      showinfobar: false,
      showsheetbar: true,
      showsheetbarConfig: true,
      showstatisticBar: true,
      showstatisticBarConfig: true,
      showConfigWindowResize: true,
    });
  });
}

export { uploadExcel };
