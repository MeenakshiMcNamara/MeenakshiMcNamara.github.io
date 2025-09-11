<script>
  function tog(id) { ... }
  function togs(c) { ... }
</script>

fetch('header.html')
  .then(res => res.text())
  .then(html => {
    document.getElementById('navbar').innerHTML = html;
  });
