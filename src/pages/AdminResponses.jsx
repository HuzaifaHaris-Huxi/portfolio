import { useState, useEffect } from 'react'
import { Trash2, Mail, Phone, MessageSquare, Clock, Users, RefreshCw } from 'lucide-react'

export default function AdminResponses() {
  const [responses, setResponses] = useState([])
  const [selected, setSelected] = useState(null)
  const [confirmClear, setConfirmClear] = useState(false)

  const load = () => {
    const data = JSON.parse(localStorage.getItem('hsquare_responses') || '[]')
    setResponses(data.slice().reverse()) // newest first
  }

  useEffect(() => {
    load()
    document.title = 'Responses — H² Admin'
  }, [])

  const deleteOne = (id) => {
    const updated = responses.filter(r => r.id !== id)
    // Preserve original order in storage
    const stored = JSON.parse(localStorage.getItem('hsquare_responses') || '[]')
    localStorage.setItem('hsquare_responses', JSON.stringify(stored.filter(r => r.id !== id)))
    setResponses(updated)
    if (selected?.id === id) setSelected(null)
  }

  const clearAll = () => {
    localStorage.removeItem('hsquare_responses')
    setResponses([])
    setSelected(null)
    setConfirmClear(false)
  }

  const fmt = (iso) => {
    const d = new Date(iso)
    return d.toLocaleString('en-US', {
      month: 'short', day: 'numeric', year: 'numeric',
      hour: '2-digit', minute: '2-digit', hour12: true,
    })
  }

  const initials = (name) =>
    name.split(' ').slice(0, 2).map(n => n[0]).join('').toUpperCase()

  return (
    <div className="admin-root">
      {/* Sidebar */}
      <aside className="admin-sidebar">
        {/* Brand */}
        <div className="admin-brand">
          <div className="nav-logo-mark" style={{ width: 32, height: 32, fontSize: 13 }}>
            H<sup>2</sup>
          </div>
          <div>
            <div className="admin-brand-title">Admin</div>
            <div className="admin-brand-sub">Responses</div>
          </div>
        </div>

        {/* Stats */}
        <div className="admin-stat-row">
          <div className="admin-stat">
            <Users size={14} strokeWidth={1.5} />
            <span>{responses.length}</span>
            <span className="admin-stat-label">Total</span>
          </div>
          <button className="admin-icon-btn" onClick={load} title="Refresh">
            <RefreshCw size={14} strokeWidth={1.5} />
          </button>
        </div>

        {/* List */}
        <div className="admin-list">
          {responses.length === 0 ? (
            <div className="admin-empty-list">No responses yet.</div>
          ) : (
            responses.map(r => (
              <button
                key={r.id}
                className={`admin-list-item ${selected?.id === r.id ? 'active' : ''}`}
                onClick={() => setSelected(r)}
              >
                <div className="admin-avatar">{initials(r.name)}</div>
                <div className="admin-list-meta">
                  <span className="admin-list-name">{r.name}</span>
                  <span className="admin-list-email">{r.email}</span>
                  <span className="admin-list-time">{fmt(r.submittedAt)}</span>
                </div>
              </button>
            ))
          )}
        </div>

        {/* Clear All */}
        {responses.length > 0 && (
          <div className="admin-clear-area">
            {confirmClear ? (
              <div className="admin-confirm">
                <span>Are you sure?</span>
                <div className="admin-confirm-btns">
                  <button className="admin-confirm-yes" onClick={clearAll}>Delete All</button>
                  <button className="admin-confirm-no" onClick={() => setConfirmClear(false)}>Cancel</button>
                </div>
              </div>
            ) : (
              <button className="admin-clear-btn" onClick={() => setConfirmClear(true)}>
                <Trash2 size={13} strokeWidth={1.5} />
                Clear All Responses
              </button>
            )}
          </div>
        )}
      </aside>

      {/* Detail Panel */}
      <main className="admin-main">
        {!selected ? (
          <div className="admin-placeholder">
            <MessageSquare size={40} strokeWidth={1} />
            <p>Select a response to view details</p>
          </div>
        ) : (
          <div className="admin-detail">
            {/* Header */}
            <div className="admin-detail-header">
              <div className="admin-detail-avatar">{initials(selected.name)}</div>
              <div>
                <h2 className="admin-detail-name">{selected.name}</h2>
                <div className="admin-detail-meta-row">
                  <span className="admin-detail-chip">
                    <Clock size={12} strokeWidth={1.5} />
                    {fmt(selected.submittedAt)}
                  </span>
                </div>
              </div>
              <button
                className="admin-delete-btn"
                onClick={() => deleteOne(selected.id)}
                title="Delete this response"
              >
                <Trash2 size={15} strokeWidth={1.5} />
              </button>
            </div>

            {/* Contact Info */}
            <div className="admin-info-grid">
              <div className="admin-info-card">
                <div className="admin-info-icon"><Mail size={16} strokeWidth={1.5} /></div>
                <div>
                  <span className="admin-info-label">Email</span>
                  <a href={`mailto:${selected.email}`} className="admin-info-value admin-link">
                    {selected.email}
                  </a>
                </div>
              </div>
              {selected.phone && (
                <div className="admin-info-card">
                  <div className="admin-info-icon"><Phone size={16} strokeWidth={1.5} /></div>
                  <div>
                    <span className="admin-info-label">Phone</span>
                    <a href={`tel:${selected.phone}`} className="admin-info-value admin-link">
                      {selected.phone}
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Message */}
            <div className="admin-message-block">
              <div className="admin-message-label">
                <MessageSquare size={14} strokeWidth={1.5} />
                Message
              </div>
              <p className="admin-message-body">{selected.message}</p>
            </div>

            {/* Raw JSON */}
            <details className="admin-raw">
              <summary className="admin-raw-summary">View raw JSON</summary>
              <pre className="admin-raw-pre">{JSON.stringify(selected, null, 2)}</pre>
            </details>
          </div>
        )}
      </main>
    </div>
  )
}
