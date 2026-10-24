(function () {
  "use strict";
  var T = JSON.parse(document.getElementById("i18n").textContent);
  var KEY = "ofm-payroll-v1";
  var IN = ["hours", "rate", "fixed", "sales", "comm", "bonus"];
  var OUT = ["base", "commission", "total", "perHour"];
  var tbody = document.getElementById("rows");
  var clearBtn = document.getElementById("clear");
  var armed = 0;
  var LANG = document.documentElement.lang || "en";

  function num(v) { var n = parseFloat(String(v == null ? "" : v).replace(",", ".")); return isFinite(n) ? n : 0; }
  function money(n) { return (Math.round(n * 100) / 100).toFixed(2); }
  function show(n, min) { n = Math.round(n * 100) / 100; if (n === 0) n = 0; return n.toLocaleString(LANG, { minimumFractionDigits: min == null ? 2 : min, maximumFractionDigits: 2 }); }
  function blank(name) { return { name: name, hours: "", rate: "", fixed: "", sales: "", comm: "", bonus: "" }; }
  function load() {
    try { var s = JSON.parse(localStorage.getItem(KEY)); if (Array.isArray(s) && s.length) return s; } catch (e) {}
    return [blank(T.chatter + " A")];
  }
  function save(list) { try { localStorage.setItem(KEY, JSON.stringify(list)); } catch (e) {} }
  function read() {
    return [].map.call(tbody.rows, function (tr) {
      var o = { name: tr.querySelector('[data-f="name"]').value };
      IN.forEach(function (f) { o[f] = tr.querySelector('[data-f="' + f + '"]').value; });
      return o;
    });
  }
  function calc(o) {
    var h = num(o.hours), base = h * num(o.rate) + num(o.fixed), commission = num(o.sales) * num(o.comm) / 100, total = base + commission + num(o.bonus);
    return { base: base, commission: commission, total: total, perHour: h > 0 ? total / h : 0 };
  }
  function input(tr, f, val) {
    var td = document.createElement("td"), i = document.createElement("input");
    i.value = val == null ? "" : val; i.setAttribute("data-f", f); i.setAttribute("aria-label", T.labels[f]);
    if (f === "name") { i.type = "text"; i.autocomplete = "off"; }
    else { td.className = "num"; i.type = "number"; i.step = "any"; if (f !== "bonus") { i.min = "0"; i.inputMode = "decimal"; } }
    td.appendChild(i); tr.appendChild(td);
  }
  function addRow(o) {
    var tr = document.createElement("tr");
    input(tr, "name", o.name);
    IN.forEach(function (f) { input(tr, f, o[f]); });
    OUT.forEach(function (k) { var td = document.createElement("td"); td.className = "num"; td.setAttribute("data-o", k); tr.appendChild(td); });
    var td = document.createElement("td"), b = document.createElement("button");
    b.type = "button"; b.className = "rm"; b.textContent = "×"; b.setAttribute("aria-label", T.remove);
    b.addEventListener("click", function () { tr.remove(); if (!tbody.rows.length) addRow(blank(T.chatter + " A")); update(); });
    td.appendChild(b); tr.appendChild(td); tbody.appendChild(tr);
  }
  function update() {
    var list = read(), sum = { hours: 0, sales: 0, base: 0, commission: 0, total: 0 };
    [].forEach.call(tbody.rows, function (tr, i) {
      var r = calc(list[i]);
      OUT.forEach(function (k) { var td = tr.querySelector('[data-o="' + k + '"]'); td.textContent = show(r[k]); td.classList.toggle("neg", r[k] < 0); });
      sum.hours += num(list[i].hours); sum.sales += num(list[i].sales); sum.base += r.base; sum.commission += r.commission; sum.total += r.total;
    });
    document.getElementById("s-hours").textContent = show(sum.hours, 0);
    document.getElementById("s-sales").textContent = show(sum.sales);
    document.getElementById("s-base").textContent = show(sum.base);
    document.getElementById("s-commission").textContent = show(sum.commission);
    document.getElementById("s-total").textContent = show(sum.total);
    document.getElementById("s-perHour").textContent = show(sum.hours > 0 ? sum.total / sum.hours : 0);
    save(list);
  }
  function cell(v) { var s = String(v); return /[",\r\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s; }
  function text(v) { var s = String(v); return /^[=+\-@\t\r]/.test(s) ? "'" + s : s; }
  function exportCsv() {
    var rows = [T.csv];
    read().forEach(function (o) {
      var r = calc(o);
      rows.push([text(o.name)].concat(IN.map(function (f) { return num(o[f]); }), OUT.map(function (k) { return money(r[k]); })));
    });
    var blob = new Blob(["﻿" + rows.map(function (r) { return r.map(cell).join(","); }).join("\r\n")], { type: "text/csv;charset=utf-8" });
    var a = document.createElement("a");
    a.href = URL.createObjectURL(blob); a.download = T.file; document.body.appendChild(a); a.click();
    setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 0);
  }
  function disarm() { clearTimeout(armed); armed = 0; clearBtn.textContent = T.clear; clearBtn.classList.remove("armed"); }

  load().forEach(addRow); update();
  tbody.addEventListener("input", update);
  document.getElementById("add").addEventListener("click", function () {
    addRow(blank(T.chatter + " " + String.fromCharCode(65 + tbody.rows.length % 26))); update();
    tbody.rows[tbody.rows.length - 1].querySelector("input").focus();
  });
  document.getElementById("csv").addEventListener("click", exportCsv);
  clearBtn.addEventListener("click", function () {
    if (!armed) { armed = setTimeout(disarm, 3000); clearBtn.textContent = T.clearArmed; clearBtn.classList.add("armed"); return; }
    disarm(); tbody.innerHTML = ""; addRow(blank(T.chatter + " A")); update();
  });
})();
