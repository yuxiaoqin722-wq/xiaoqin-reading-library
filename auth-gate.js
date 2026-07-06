```javascript
/* haoteach 登录门槛 auth-gate.js —— 放在网站根目录,每页引用一行即可 */
(function () {
  var SB_URL = 'https://pqwgottflvwbyhjipcgb.supabase.co';
  var SB_KEY = 'sb_publishable_kk5uEHy84Wx71bRPYMUfLQ_T4jI_8Ef';
  var CFG = { auth: { storageKey: 'haoteach-auth', persistSession: true, autoRefreshToken: true, detectSessionInUrl: true } };

  var css = "#agOverlay{position:fixed;inset:0;z-index:2147483000;background:#FBF8F2;display:flex;align-items:center;justify-content:center;padding:20px;font-family:'Poppins','Noto Sans SC',system-ui,-apple-system,sans-serif}#agOverlay.ag-hide{display:none}#agOverlay *{box-sizing:border-box}.ag-card{width:min(94vw,400px);background:#fff;border-radius:22px;box-shadow:0 18px 60px rgba(0,0,0,.16);padding:30px 28px 22px;text-align:center}.ag-h{font-size:22px;font-weight:800;color:#1a3a2b;margin:0 0 4px}.ag-sub{font-size:14px;color:#8a8578;margin:0 0 18px}.ag-tabs{display:flex;background:#f0ece3;border-radius:12px;padding:4px;margin-bottom:16px}.ag-tabs button{flex:1;border:none;background:none;padding:9px;border-radius:9px;font-size:14px;font-weight:700;color:#8a8578;cursor:pointer}.ag-tabs button.on{background:#fff;color:#1a3a2b;box-shadow:0 2px 6px rgba(0,0,0,.08)}.ag-field{text-align:left;margin-bottom:12px}.ag-field label{display:block;font-size:12.5px;font-weight:600;color:#6b6659;margin-bottom:5px}.ag-field input{width:100%;padding:11px 13px;border:1.5px solid #e3ddd0;border-radius:10px;font-size:15px;outline:none;font-family:inherit}.ag-field input:focus{border-color:#43A047}.ag-err{font-size:13px;color:#c0392b;min-height:18px;margin-bottom:8px;line-height:1.35}.ag-submit{width:100%;padding:13px;border:none;border-radius:11px;background:#1a3a2b;color:#fff;font-size:15px;font-weight:700;cursor:pointer}.ag-submit:hover{background:#43A047}.ag-submit:disabled{opacity:.6}.ag-link{display:inline-block;margin-top:12px;font-size:13px;color:#43A047;text-decoration:none;cursor:pointer}#agGreet{position:fixed;top:12px;right:14px;z-index:2147482000;display:none;align-items:center;gap:9px;background:#fff;border-radius:22px;box-shadow:0 4px 16px rgba(0,0,0,.12);padding:7px 8px 7px 14px;font-family:'Poppins','Noto Sans SC',sans-serif}#agGreet .g-name{font-size:13.5px;font-weight:700;color:#1a3a2b}#agGreet .g-out{border:none;background:#f0ece3;color:#6b6659;font-size:12.5px;font-weight:600;padding:6px 13px;border-radius:16px;cursor:pointer}";

  function _t(p, ms) { return Promise.race([p, new Promise(function (_, r) { setTimeout(function () { r(new Error('timeout')); }, ms || 12000); })]); }
  function readLocal() { try { var raw = localStorage.getItem('haoteach-auth'); if (!raw) return null; var o = JSON.parse(raw); var s = o.currentSession || o; if (s && s.user && s.refresh_token) return s; } catch (e) {} return null; }

  function inject() {
    var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);
    var ov = document.createElement('div'); ov.id = 'agOverlay';
    ov.innerHTML = '<div class="ag-card"><h2 class="ag-h" id="agTitle">欢迎回来 Welcome back</h2><p class="ag-sub" id="agSub">登录以继续 Sign in to continue</p><div class="ag-tabs"><button id="agTabIn" class="on" type="button">登录 Sign in</button><button id="agTabUp" type="button">注册 Sign up</button></div><div class="ag-field" id="agNameField" style="display:none"><label>昵称 Name</label><input type="text" id="agName" placeholder="你的昵称 Your name"></div><div class="ag-field"><label>邮箱 Email</label><input type="email" id="agEmail" placeholder="you@example.com"></div><div class="ag-field"><label>密码 Password</label><input type="password" id="agPass" placeholder="密码 Password"></div><div class="ag-err" id="agErr"></div><button class="ag-submit" id="agSubmit" type="button">登录 Sign in</button></div>';
    document.body.appendChild(ov);
    var gr = document.createElement('div'); gr.id = 'agGreet';
    gr.innerHTML = '<span class="g-name" id="agGName"></span><button class="g-out" id="agGOut" type="button">退出 Sign out</button>';
    document.body.appendChild(gr);
    return ov;
  }

  var ov, sb, tab = 'signin';
  function q(id) { return document.getElementById(id); }
  function nameOf(u) { var n = u.user_metadata && (u.user_metadata.name || u.user_metadata.full_name); return n || (u.email ? u.email.split('@')[0] : 'there'); }
  function setTab(m) { tab = m; q('agTabIn').classList.toggle('on', m === 'signin'); q('agTabUp').classList.toggle('on', m === 'signup'); q('agNameField').style.display = m === 'signup' ? 'block' : 'none'; q('agSubmit').textContent = m === 'signup' ? '注册 Sign up' : '登录 Sign in'; q('agErr').textContent = ''; }
  function showGate() { document.documentElement.style.overflow = 'hidden'; ov.classList.remove('ag-hide'); q('agGreet').style.display = 'none'; }
  function hideGate(u) { document.documentElement.style.overflow = ''; ov.classList.add('ag-hide'); if (u) { q('agGName').textContent = 'Hi ' + nameOf(u); q('agGreet').style.display = 'flex'; } }

  async function submit() {
    var email = q('agEmail').value.trim(), pass = q('agPass').value, name = q('agName').value.trim(), err = q('agErr');
    err.style.color = '#c0392b'; err.textContent = '';
    if (!email || !pass) { err.textContent = '请输入邮箱和密码 Enter email & password'; return; }
    var btn = q('agSubmit'); btn.disabled = true;
    try {
      if (tab === 'signup') {
        if (pass.length < 6) { err.textContent = '密码至少6位 Min 6 chars'; btn.disabled = false; return; }
        var r = await _t(sb.auth.signUp({ email: email, password: pass, options: { data: { name: name } } }));
        if (r.error) { err.textContent = r.error.message; btn.disabled = false; return; }
        if (r.data && r.data.session) { hideGate(r.data.user); return; }
        err.style.color = '#1a6637'; err.textContent = '✅ 注册成功,请去邮箱确认后登录'; setTab('signin');
      } else {
        var r2 = await _t(sb.auth.signInWithPassword({ email: email, password: pass }));
        if (r2.error) { err.textContent = '邮箱或密码错误 Incorrect email or password'; btn.disabled = false; return; }
        hideGate(r2.data.user);
      }
    } catch (e) { err.textContent = '请求超时,请重试 Timed out, try again'; }
    btn.disabled = false;
  }

  function wire() {
    q('agTabIn').onclick = function () { setTab('signin'); };
    q('agTabUp').onclick = function () { setTab('signup'); };
    q('agSubmit').onclick = submit;
    q('agPass').addEventListener('keydown', function (e) { if (e.key === 'Enter') submit(); });
    q('agGOut').onclick = async function () { try { await _t(sb.auth.signOut(), 6000); } catch (e) {} location.reload(); };
  }

  async function start() {
    if (!window.supabase || !window.supabase.createClient) { console.error('supabase-js not loaded'); return; }
    sb = window.supabase.createClient(SB_URL, SB_KEY, CFG);
    wire();
    var ls = readLocal();
    if (ls) { hideGate(ls.user); }
    else { try { var res = await _t(sb.auth.getSession(), 10000); var s = res && res.data && res.data.session; if (s && s.user) hideGate(s.user); else showGate(); } catch (e) { showGate(); } }
    sb.auth.onAuthStateChange(function (_e, session) { if (session && session.user) hideGate(session.user); });
  }

  function ensureSupabase(cb) {
    if (window.supabase && window.supabase.createClient) return cb();
    var s = document.createElement('script');
    s.src = 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/dist/umd/supabase.js';
    s.onload = cb; s.onerror = function () { console.error('failed to load supabase-js'); };
    document.head.appendChild(s);
  }
  function boot() { document.documentElement.style.overflow = 'hidden'; ov = inject(); ensureSupabase(start); }
  if (document.body) boot(); else document.addEventListener('DOMContentLoaded', boot);
})();
```